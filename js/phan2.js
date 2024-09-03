window.addEventListener("load",function(){
    var Audio = document.getElementById("audio");
    function loadmusic(){
        $(".play-left .imgsong img").attr("src",$(".song[playing='true'] .img-song>img").attr("src"))
        $(".play-left .infosong h4").text($(".song[playing='true'] h4").text())
        $(".play-left .infosong p").text($(".song[playing='true'] p").text())
    }
    function next (obj){
        $(".song").attr("playing","false")
        $(obj).attr("playing","true")
        var x=`../audio/${$(obj).find("h4").text()}_${$(obj).find("p").text()}.mp3`
        $("#audio").attr("src",x)
        Audio.play()
        loadmusic()
    }
    function loadplaylist(){
        let playlist=document.querySelectorAll(".playlist")
        let playlistsong=document.querySelectorAll(".playlistsong")
        for(let pl of playlist)
            for(let pls of playlistsong)
                if($(pl).find("h1").text()=== $(pls).find("h1").text()){
                    $(pl).find(".img-playlist img").attr("src",$(pls).find(".song .img-song img").attr("src"))
                }
            
    }
    loadplaylist()

    // fix 
    $(".songs").on("click",".song",function(event){
        if ($(event.target).closest('.menu-song,.addpls').length === 0) {
            $(".playlists").css("margin-bottom", "80px")
            $(".playlistsong .song:last-child").css("margin-bottom", "90px")
            $(".singer .song:last-child").css("margin-bottom", "90px")
        }
    })
    $(".scrollleft,.scrollright").remove()



    // tạo danh sách phát
    $(".addpls").click(function(){
        $(".addplaylist").slideDown()
    })


    // chọn danh sách phát
    let playlist=document.querySelectorAll(".playlist")
    for(let pl of playlist)
        $(pl).click(function(event){
            if ($(event.target).closest(".playall,playshuffle").length === 0){
                $(".playlistsong").slideUp(500)
                let playlistsong=document.querySelectorAll(".playlistsong")
                for(let pls of playlistsong)
                    if($(this).find("h1").text()=== $(pls).find("h1").text())
                        $("html").animate({scrollTop:0},500,function(){
                            $(pls).slideDown(500)
                        }) 
            }
           
    })
    // phát tất cả
    $(".playall").click(function(){
        $(".playlistsong").slideUp(500)
        let playlistsong=document.querySelectorAll(".playlistsong")
            for(let pls of playlistsong)
                if($(this).closest(".playlist").find("h1").text()=== $(pls).find("h1").text()){
                    $("html").animate({scrollTop:0},500,function(){
                        $("#shuffle").attr("src","https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=FFFFFF") 
                        next($(pls).find(".song").eq(0))
                        $(pls).slideDown(500)
                    })
                }
                    
    })
    // phát ngẫu nhiên
    $(".playshuffle").click(function(){
        $(".playlistsong").slideUp(500)
        let playlistsong=document.querySelectorAll(".playlistsong")
            for(let pls of playlistsong)
                if($(this).closest(".playlist").find("h1").text()=== $(pls).find("h1").text()){
                    $("html").animate({scrollTop:0},500,function(){
                        $("#shuffle").attr("src","https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=7950F2")
                        var x=$(pls).find(".song").length
                        next($(pls).find(".song").eq(Math.floor(Math.random() * (x))))
                        $(pls).slideDown(500)
                    })
                }
                    
    })
    
})
