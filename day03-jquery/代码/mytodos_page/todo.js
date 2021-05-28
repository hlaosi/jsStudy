$('.todo-header input').keyup(function (e) {
  if (e.keyCode === 13) {
    var value = $(this).val().trim();
    if (!value) return
    var str = '<li>\
        <label>\
          <input type="checkbox"/>\
          <span>'+ value + '</span>\
        </label>\
        <button class="btn btn-danger">删除</button>\
        </li>'
    $('.todo-main').append(str);
    $(this).val('');
    totlechecke()
    textchecked()
  }

})

$('.todo-main').on('click ', 'li>label>input', function () {
  $(this).next().toggleClass('active');
  totlechecke()
  textchecked()
})
$('.todo-footer input').on('click', function () {

  $('.todo-main>li>label>input').prop('checked', $(this).prop('checked'));
  $('.todo-main>li>label>input').prop('checked') ? $('.todo-main>li>label>span').addClass('active') : $('.todo-main>li>label>span').removeClass('active')
  textchecked()
})

$('.todo-main').on('click', 'li button', function () {
  $(this).parent().remove();
  totlechecke()
  textchecked()
})

$('.todo-footer .btn').on('click', function () {
  $('.todo-main li input:checked').parent().parent().remove()
  totlechecke()
  textchecked()
})
function totlechecke() {
  var onchecked = $('.todo-main>li>label>input:checked').length;
  var all = $('.todo-main>li>label>input').length;
  if (onchecked === 0 && all === 0) {
    $('.todo-footer input').prop('checked', false);
    return
  }

  $('.todo-footer input').prop('checked', onchecked === all)
}

function textchecked() {
  var onchecked = $('.todo-main>li>label>input:checked').length;
  var all = $('.todo-main>li>label>input').length;
  $('#do').text('已完成' + onchecked);
  $('#all').text('全部'+all)
}