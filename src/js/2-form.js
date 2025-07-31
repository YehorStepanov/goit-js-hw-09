let formData = {
    email: '',
    message: ''
};

const FormElem = document.querySelector('.feedback-form');

document.addEventListener("DOMContentLoaded", (e) => {
    const strForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    try {
        formData = strForm ? strForm : formData;  
        FormElem.elements.email.value = formData.email;
        FormElem.elements.message.value = formData.message;
        
    } catch {
        
    }
})

FormElem.addEventListener("input", (e) => {    
    formData.email = e.currentTarget.elements.email.value.trim();
    formData.message = e.currentTarget.elements.message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
});

FormElem.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formData.email && formData.message) {
        console.log(formData);
        FormElem.reset();
        localStorage.removeItem("feedback-form-state");
    } else {
        alert('Fill please all fields');
    }
    formData = {
      email: '',
      message: ''
    };
});