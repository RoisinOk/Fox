/**
 * Created by roisinokeeffe on 15/07/2015.
 */


var tl = new TimelineMax({repeat:2, repeatDelay:1});

tl.add( TweenLite.to("#head", 1, {
    rotation    :   "-5",
    top         :   "5%",
}) );

tl.add( TweenLite.to("#head",.1, {opacity:1}) );
tl.add( TweenLite.to("#head2",.1, {opacity:0}) );
tl.add( TweenLite.to("#head",.1, { rotation:"5", top:"5%",}) );

tl.add( TweenLite.from("#tail", 1, {
    top             :   "-15%",
    left            :   "-5%",
    rotation        :   "90",
    transformOrigin :   "27% 100%",
    ease            :   Back.easeOut.config(2), y: 0

}) );

tl.add( TweenLite.to("#circle", 1, {
    height          :   450,
    width           :   450,
    top             :   "1%",
    margin          :   0,
    left           :   "53%",
    ease            :   Back.easeOut.config(2), y: 0

}) );




