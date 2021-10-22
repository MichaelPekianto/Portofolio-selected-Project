$(document).ready(function() {
   let len=$('.node').length; 
   let nodes=$('.node');
   let index=0;
   nodes.hide();
   nodes.eq(index).show();
   let counter=$('#counter');
counter.html(0)
      $('#prev').click(function () {
        nodes.eq(index).animate(
            {
                left:'100px'
                ,opacity:0
            },
            function () {
                nodes.eq(index).hide();
                if(index==0){
                    index= len-1;
                }else{
                    index= index-1;
                }
                nodes.eq(index).show();
                nodes.eq(index).css('left','100');
                nodes.eq(index).animate({
                    left:0
                    ,opacity:1
                })
                counter.html(index);
            }
        )
       

    });
    
   
   $('#next').click(function() {
    nodes.eq(index).animate(
        {
            left:'-100px'
            ,opacity:0
        },
        function () {
            nodes.eq(index).hide();
            if(index==len-1){
                index= 0;
            }else{
                index= index+1;
            }
            nodes.eq(index).show();
            nodes.eq(index).css('left','100');
            nodes.eq(index).animate({
                left:0
                ,opacity:1
            })
            counter.html(index);
        }
    )
});

});