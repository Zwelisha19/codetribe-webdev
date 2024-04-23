

  
    const varHome=document.getElementById('homePage');
   
   varHome.innerHTML=`
         <div id="container" class="container">
            <div id="header">
            &nbsp;&nbsp;&nbsp;
               <div id="logoCon" class="logoCon">
                     <div class="logo">
                        <img class="imageLogo" src="assets/Images/logo.png" alt="my logo">
                  </div>
               </div>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <a href="index.html"><p>Home</p></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <a href="about.html"><p>About Me</p></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <a href="Contact.html"><p>Contact Us</p></a>
            </div>

            <div class="videoContainer">
               <video src="assets/video/video.mp4" controls></video>
            </div>

            <div class="container2">
               <div class="box1">
                  <h2 id="name">Thabang Siwela</h2>
                  <p id="paragraph">My name is Thabang Siwela. A final year student in Tshwane University Of Technology
                        specialising in Software Development. I love Programming because it's challenging, which makes you
                        realize the things you are capable of and also learning new things almost every day. Programming is
                        Fun.</p>
               </div>
               <div class="imgContainer">
                  <img class="img" src="assets/Images/picture.jpg" alt="My Picture">
               </div>
            </div>

            <div class="footer">
               <div class="iconsContainer">
                  <p style="margin-left: 10px;">2752 Klipgat B <br> Mabopane <br> 0190</p>
                  <a href="https://www.facebook.com/profile.php?id=100080211074455"><i
                           class="fa-brands fa-facebook fa-lg"></i></a>
                  <a href="https://x.com/ThabangZwelisha?t=P_QRUEPCuJsb_hzoGQsiig&s=08"><i
                           class="fa-brands fa-x-twitter fa-lg" style="margin-left: 90px;margin-top: 80px;"></i></a>
                  <a
                        href="https://www.linkedin.com/in/zwelisha-thabang-9008a7252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i
                           class="fa-brands fa-linkedin fa-lg" style="margin-left: 90px;margin-top: 80px;"></i></a>
               </div>
               <div class="iframeContainer">
                  <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57636.424958361!2d27.94952861803504!3d-25.462439154225752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfcb00fb3d3633%3A0x17164cb107f780a8!2sSofasonke!5e0!3m2!1sen!2sza!4v1712410885237!5m2!1sen!2sza"
                        width="210" height="80" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
            </div>
      </div>
   `
   
 console.log(varHome);