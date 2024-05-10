const varHome=document.getElementById("mainBody");

varHome.innerHTML=`
<div id="container">
      
      <div id="con-Left">
        <div id="icon-container"><img src="images/favicon-32x32.png" alt="icon-image"></div><h5>BASE <br> APPAREL</h5>
        
        <h1><span style="color: pink;">WE'RE </span><br> COMING <br> SOON</h1>
        <p id="hello"> Hello fellow shoppers! We're currently building our new
          fashion store. Add your email below to stay up-to-date with announcements
          and our launch deals. </p>

          <form action="https://formspree.io/f/xbjnqklp" method="POST">
            <input type="email" placeholder="Email Address">
            <input type="submit" value=">">
          </form>
      </div>

      <div id="con-Right">
        <img src="images/hero-desktop.jpg" alt="A picture of a female">
      </div>
    </div>

    

    <footer>
      <p class="attribution" >
        Bootcamp 2024 by
        <a href="https://www.mlab.co.za" target="_blank">CodeTribe</a>.
        Developed by <a href="https://github.com/Zwelisha19">Zwelisha Siwela</a>.
      </p>
    </footer>
`