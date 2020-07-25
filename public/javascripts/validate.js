function Validator(options) {

    // Function tìm kiếm element cha có class cần tìm
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    // Object chứa các rules
    var objectRules = {}

    // Hàm thực hiện validate
    function validate(inputElement, x) {
        var errorMessage;
        var errorElement = getParent(inputElement, options.formInputGroup).querySelector(options.errorSelector)
            // Duyệt qua các rules trong mảng của input được select
        for (var i = 0; i < objectRules[x.selector].length; i++) {
            errorMessage = objectRules[x.selector][i](inputElement.value)
            if (errorMessage) break
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formInputGroup).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formInputGroup).classList.remove('invalid')
        }
        return !errorMessage
    }

    // Get Element của Form để xử Lý Validate
    var formElement = document.querySelector(options.form)

    if (formElement) {

        // Xử lý các rules khi nhấn submit
        formElement.onsubmit = e => {
            // e.preventDefault();
            // Khởi tạo biến kiểm tra form có nhập lỗi ?
            var formValid = true;
            options.rules.forEach(x => {
                var inputElement = formElement.querySelector(x.selector)
                var isValid = validate(inputElement, x)
                if (!isValid) {
                    formValid = false;
                }
            })
            if (formValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce((values, input) => {
                        values[input.name] = input.value
                        return values
                    }, {})
                    options.onSubmit(formValues)
                } else {
                    formElement.submit();
                }
            }
        }

        options.rules.forEach((x) => {
            // Nếu 1 input có nhiều rules thì push những rules của input đó vào 1 mảng của input đó
            if (Array.isArray(objectRules[x.selector])) {
                // Nếu input đã có 1 rule trong object thì push rule tiếp theo vào mảng của input đó trong obj
                objectRules[x.selector].push(x.test)
            } else {
                // Nếu input chưa có rule thì cho rule mà object
                objectRules[x.selector] = [x.test]
            }

            var inputElement = formElement.querySelector(x.selector)
            if (inputElement) {
                // Xử lý onblur khi nhấp ra khỏi thẻ input
                inputElement.onblur = () => {
                        validate(inputElement, x)
                    }
                    // Xử lý onblur mất đi khi bắt đầu nhập lại vào thẻ input
                inputElement.oninput = () => {
                    var errorElement = getParent(inputElement, options.formInputGroup).querySelector(options.errorSelector)
                    errorElement.innerText = '';
                    getParent(inputElement, options.formInputGroup).classList.remove('invalid')
                }
            }
        })
    }
}


// Rules 
Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: value => {
            return value.trim() ? undefined : 'Please enter this field'
        }
    };
}

Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: value => {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : value.length === 0 ? 'Please enter this field' : message
        }
    };
}

Validator.minLength = (selector, min, message) => {
    return {
        selector: selector,
        test: value => value.length >= min ? undefined : value.length > 0 ? `Minimum password length is ${min} and includes number` : message
    };
}

Validator.isMatched = (selector, confirmPass, message) => {
    return {
        selector: selector,
        test: value => value === confirmPass() ? undefined : value.length === 0 ? 'Please enter this field' : message
    }
}