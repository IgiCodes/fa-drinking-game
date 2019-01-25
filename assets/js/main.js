$('.form').submit((e) => {
    e.preventDefault();

    const maxNum = $('#submissionNumber').val();
    const randomNum = Math.round(Math.random() * maxNum);
    const link = 'https://www.furaffinity.net/view/' + randomNum;

    $('#generatedLink').text(link).attr('href', link).show();
});