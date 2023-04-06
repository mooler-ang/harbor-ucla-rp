$(document).ready(function () {
  var url = location.href;

  if (url.search("fs") >= 1) {
    $(".showMsg").show();
    $("#contactForm").hide();
  }

  //Expiration date of the message under the title in the slider

  //ex: new Date(2020, 0, 1 , 23, 59) - 1/1/2020 at 23:59
  //month: 0 - 11
  //hours: 0 - 23
  var expirationDate = new Date(2022, 0, 31, 23, 59); ///---- CHANGE HERE

  if (expirationDate > Date.now()) {
    //content - this is deprecated and replaced with modal view.
    //var sectionContent = "";
      //"<h3>Update: 4/2/2020</h3><p>Notice: Weather delay to road improvements</p><p>Rain in the forecast has delayed road improvements to Oak Grove Drive and Berkshire Place. LA County Public Works has rescheduled the microsurfacing work along Oak Grove Drive and a portion of Berkshire Place in the cities of La Cañada Flintridge and Pasadena to April 13-16, with final roadway striping to be performed by April 17, weather permitting.</p><p>Working hours are from 7 am to 5 pm, and traffic may be reduced to one lane in each direction during construction. Call the project hotline at (626) 458-2507 with any questions or visit the project website at devilsgateproject.com.</p><p>The project team thanks you for your patience.</p>"; ///---- CHANGE HERE
    //get the section
    var section = $(".timed-container");

    //modified section content
    //section.html(sectionContent);

    //show section
    section.removeClass("d-none");
  }

  console.log("ready!");
});
