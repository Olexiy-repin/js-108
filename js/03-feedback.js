const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  console.log(formDataFromLS);
  console.dir(feedbackFormEl.elements);

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      /*
        1 Ітерація
        key = 'user_name'

        2 Ітерація
        key = 'user_email'

        3 Ітерація
        key = 'user_message'
      */
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem('feedback-form-data');
};

feedbackFormEl.addEventListener('change', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
