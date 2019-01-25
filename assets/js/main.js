$('.form').submit((e) => {
    e.preventDefault();

    const maxNum = $('#submissionNumber').val();
    const randomNum = Math.round(Math.random() * maxNum);
    const link = 'https://www.furaffinity.net/view/' + randomNum;

    $('.logo img').hide();
    $('.form').addClass('header-bar').addClass('fixed-top').removeClass('flex-column');
    $('.form h1').addClass('w-25');
    $('#iframe').attr('src', link).show();
});