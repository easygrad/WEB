var Links={
    setColor:function(color){
        $('a').css('color', color);
    }
}

var Body={
    setColor:function(color){
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self){
    var target=document.querySelector('body');
    if(self.value==='night mode'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day mode'
        Links.setColor('yellow')
    } else{
        Body.setBackgroundColor('white');
        Body.setColor('black')
        self.value='night mode'
        Links.setColor('blue')
    }
}