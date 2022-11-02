    $.validator.setDefaults({
        submitHandler: function() {
            alert("加入成功!");
            window.location.href = "member_detail.asp";
        }
    });
    $(document).ready(function() {

                $('#twzipcode').twzipcode({
                    zipcodeSel: false
                });


        $("#addForm").validate({
            rules: {
                inputName: "required",
                inputPhone: {
                    required: true,
                    digits: true
                },
                inputEmail: {
                    required: true,
                    email: true
                },
                radioGender: "required",
                selBirthYear: "required",
                selBirthMonth: "required",
                selBirthDate: "required",
                inputAddress: {
                    required: true,
                    minlength: 5
                },
                inputSport: "required",
            },
            messages: {
                inputName: "請輸入會員的名字",
                inputPhone: {
                    required: "請輸入會員的電話",
                    digits: "請輸入數字"
                },
                inputAddress: {
                    required: "請輸入會員的地址",
                    minlength: "會員的地址過短"
                },
                inputSport: "請輸入會員喜愛的運動",
                inputEmail: "請輸入會員的Email",
            },
            errorElement: "em",
            // submitHandler: function(form) {
            //     form.submit();
            // },
            errorPlacement: function(error, element) {
                // Add the `help-block` class to the error element
                error.addClass("help-block");

                // Add `has-feedback` class to the parent div.form-group
                // in order to add icons to inputs
                element.parents(".form-box").addClass("has-feedback");

                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.parent("label"));
                } else {
                    error.insertAfter(element);
                }

                // Add the span element, if doesn't exists, and apply the icon classes to it.
                if (!element.next("span")[0]) {
                    $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>").insertAfter(element);
                }
            },
            success: function(label, element) {
                // Add the span element, if doesn't exists, and apply the icon classes to it.
                if (!$(element).next("span")[0]) {
                    $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
                }
            },
            highlight: function(element, errorClass, validClass) {
                $(element).parents(".form-box").addClass("has-error").removeClass("has-success");
                $(element).next("span").addClass("glyphicon-remove").removeClass("glyphicon-ok");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).parents(".form-box").addClass("has-success").removeClass("has-error");
                $(element).next("span").addClass("glyphicon-ok").removeClass("glyphicon-remove");
            }
        });
    });