$(function() {

    $.ajax({
        url: '/api',
        dataType: "json",
        success: function(list) {
            if (list.code === 1) {
                reacData(list.data);
            }
        }
    });

    function reacData(data) {
        var str = "";
        data.forEach(function(i, v) {
            str += ` <li class="swiper-slide">`;
            str += reatData(i.list);
            str += `</li>`;
        });
        $('.swiper-wrapper').html(str);
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true
        });

    };

    function reatData(data) {
        return data.map(function(item) {
            return `<dl>
                       <dd><img src="${item.url}" alt=""></dd>
                       <dt>${item.val}</dt>
                      </dl>`
        }).join('');
    };

})