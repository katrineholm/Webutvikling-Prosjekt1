const binder = () => {
  let ids = ["#house", "#pipe", "#roof", "#door", "#grass", "#boble3", "#boble2", "#boble1"];
  let b = "#53354a";
  let colors = {
    "#pipe": ["#ffc0cb", b],
    "#roof": ["#8d6262", b],
    "#house": ["#ffc0cb", b],
    "#door":["#8d6262", b],
    "#grass":["#2eb872", b],
    "#boble3":["white", b],
    "#boble2":["#dfd3d3", b],
    "#boble1":["grey", b],
  }

  ids.map((id) => {
    $(id).mouseover(()=>{
      $(id).attr("fill", colors[id][1]);
    });

      $(id).mouseout(()=>{
        $(id).attr("fill", colors[id][0])}
  )});
};
  $(".frame").click(()=>{
  $("#boble3").css({
    "transform": "translateY(-200px)",
    "transition": "linear 3s",
  })
  $("#boble2").css({
    "transform": "translateY(-200px)",
    "transition": "linear 3s",
  })
  $("#boble1").css({
    "transform": "translateY(-200px)",
    "transition": "linear 3s",
  });

  setTimeout(() => {
    $("#boble1").css({'transform':'translateY(0px)', "transition": "none"})
    $("#boble2").css({'transform':'translateY(0px)', "transition": "none"})
    $("#boble3").css({'transform':'translateY(0px)', "transition": "none"})
  },3000)


});


$("#dokumentationButton").click(() => {
  $(".dokumentation").slideToggle();
});

binder();
