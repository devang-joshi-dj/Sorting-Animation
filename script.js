$(document).ready(
    $(".start").click(function(){

        $(".emo1").animate({top: '-150px'});
        $(".emo2").animate({top: '+150px'});
        $(".emo1").animate({left: '+175px'});
        $(".emo2").animate({right: '+150px'});
        $(".emo1").animate({top: '+0px'});
        $(".emo2").animate({top: '-0px'}, function(){
            $(".emo1").animate({top: '-150px'});
            $(".emo3").animate({top: '+150px'});
            $(".emo1").animate({left: '+340px'});
            $(".emo3").animate({right: '+150px'});
            $(".emo1").animate({top: '+0px'});
            $(".emo3").animate({top: '-0px'}, function(){
                $(".emo1").animate({top: '-150px'});
                $(".emo4").animate({top: '+150px'});
                $(".emo1").animate({left: '+480px'});
                $(".emo4").animate({right: '+150px'});
                $(".emo1").animate({top: '+0px'});
                $(".emo4").animate({top: '-0px'}, function(){
                    $(".emo1").animate({top: '-150px'});
                    $(".emo5").animate({top: '+150px'});
                    $(".emo1").animate({left: '+620px'});
                    $(".emo5").animate({right: '+150px'});
                    $(".emo1").animate({top: '+0px'});
                    $(".emo5").animate({top: '-0px'}, 
                    
                    function(){
                        $(".emo2").animate({top: '-150px'});
                        $(".emo3").animate({top: '+150px'});
                        $(".emo2").animate({left: '+0px'});
                        $(".emo3").animate({right: '+320px'});
                        $(".emo2").animate({top: '+0px'});
                        $(".emo3").animate({top: '-0px'}, function(){
                            $(".emo2").animate({top: '-150px'});
                            $(".emo4").animate({top: '+150px'});
                            $(".emo2").animate({left: '+150px'});
                            $(".emo4").animate({right: '+320px'});
                            $(".emo2").animate({top: '+0px'});
                            $(".emo4").animate({top: '-0px'}, function(){
                                $(".emo2").animate({top: '-150px'});
                                $(".emo5").animate({top: '+150px'});
                                $(".emo2").animate({left: '+275px'});
                                $(".emo5").animate({right: '+320px'});
                                $(".emo2").animate({top: '+0px'});
                                $(".emo5").animate({top: '-0px'}, 
                                
                                function(){
                                    $(".emo3").animate({top: '-150px'});
                                    $(".emo4").animate({top: '+150px'});
                                    $(".emo3").animate({right: '+175px'});
                                    $(".emo4").animate({right: '+470px'});
                                    $(".emo3").animate({top: '+0px'});
                                    $(".emo4").animate({top: '-0px'}, function(){
                                        $(".emo3").animate({top: '-150px'});
                                        $(".emo5").animate({top: '+150px'});
                                        $(".emo3").animate({right: '+45px'});
                                        $(".emo5").animate({right: '+470px'});
                                        $(".emo3").animate({top: '+0px'});
                                        $(".emo5").animate({top: '-0px'}, 
                                        
                                        function(){
                                            $(".emo4").animate({top: '-150px'});
                                            $(".emo5").animate({top: '+150px'});
                                            $(".emo4").animate({right: '+340px'});
                                            $(".emo5").animate({right: '+610px'});
                                            $(".emo4").animate({top: '+0px'});
                                            $(".emo5").animate({top: '-0px'});
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    //  $(".emo2").click(function(){
    // $(".emo2").replaceWith("<div class='emoji emo2'>&#128512;</div>");
    //  });
    }));
