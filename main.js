/**
 * Created by roisinokeeffe on 15/07/2015.
 */

//Declare a new timeline. Make it repeat twice (3 times total), with a delay of 1 second

var foxTimeline = new TimelineMax({repeat:2, repeatDelay:1});

foxTimeline.to("#head", 1, {
    rotation    :   "-5",
    top         :   "5%",
}) ;

foxTimeline.to("#circle", 2, {
    height          :   450,
    width           :   450,
    top             :   "1%",
    margin          :   0,
    left           :   "53%",
    ease            :   Back.easeOut.config(2), y: 0

});

foxTimeline.to("#head",0, {opacity:1}, "-=1.75") ;
foxTimeline.to("#head2",0, {opacity:0}, "-=1.75") ;
foxTimeline.to("#head",.5, { rotation:"5", top:"5%",}, "-=1.5");



foxTimeline.from("#tail", 1, {
    top             :   "-15%",
    left            :   "-5%",
    rotation        :   "90",
    transformOrigin :   "27% 100%",
    ease            :   Back.easeOut.config(2), y: 0

}, "-=1.75");


