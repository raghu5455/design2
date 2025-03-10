<?php
   /*
   Template Name:Home
   */
   ?>
<?php get_header(); ?> 
<!-- Slider -->  
<style>
   /* .service_inner_content1 a img {
   width: 100%;
   } */
   @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Quicksand:wght@300..700&display=swap');
   li.nav-item {
   position: static;
   }
   .nav_sub_menu {
   min-width: 1000px !important;
   background: #1b232a !important;
   left: 50%;
   height: 450px;
   transform: translateX(-50%);
   z-index: 99999 !important;
   }
   .nav-dropdown-img img {
   width: 70%;
   }
   .nav-dropdown-menu {
   padding-left: 25px;
   }
   .nav-dropdown-menu ul {
   padding: 0;
   }
   .nav-dropdown-menu h5 {
   color: #f3bd48;
   display: inline;
   display: flex;
   align-items: start;
   padding-left: 4px;
   }
   .nav-dropdown-btn {
   margin-top: 20px;
   }
   .dropdown-area-btn {
   background: #f3bd48;
   color: #000;
   padding: 4px 30px;
   font-weight: 600;
   border: 1px solid #f3bd48;
   border-radius: 10px;
   }
   .dropdown-area-btn:hover {
   border-color: #f3bd48;
   background: none;
   color: #f3bd48;
   text-decoration: none;
   }
   .service_area_hover a {
   color: #fff;
   text-decoration: none;
   text-decoration: none;
   display: inline-block;
   border-radius: 10px;
   }
   .service_area_hover:hover h3 {
   color: #f3bd48;
   }
   .service_inner_content1 a:hover {
   color: #f3bd48;
   }
   .carousel {
   height: 371px;
   }
   .carousel-inner {
   padding: 70px 0;
   }
   .overlay {
   opacity: 0.9;
   }
   .banner-bg-image {
   width: 100%;
   position: absolute;
   overflow: hidden;
   height: 372px;
   top: -70px;
   z-index: -1;
   }
   .banner-left img {
   max-width: 492px;
   }
   .banner-left img.slide-2-img {
   max-width: 410px;
   }
   .banner-left h2 {
   font-size: 28px;
   color: #fff;
   letter-spacing: 1.5px;
   font-weight: 400;
   font-family: "Quicksand", sans-serif;
   }
   section.slider-section.banner video {
   top: -70px;
   z-index: -1;
   }
   .carousel-inner {
   position: relative;
   width: 100%;
   height: 100%;
   }
   .banner_btn .button {
   border: 2px solid #fff;
   background: transparent;
   padding: 8px 42px;
   color: #fff;
   font-size: 20px;
   font-family: "Marck Script", cursive;
   }
   .slide-1-overlay {
   content: "";
   position: absolute;
   top: -200px;
   left: 0;
   z-index: -1;
   width: 100%;
   height: 100rem;
   background: #454e54;
   opacity: 0.9;
   }
   .slide-3 .banner-left img {
   width: 200px;
   }
   .slider3_logo {
   background: #688a7ed9;
   width: max-content;
   margin-top: -70px;
   padding: 25px 10px 82px;
   clip-path: polygon(100% 0, 100% 77%, 50% 100%, 0 77%, 0 0);
   }
   .slide-3 .banner_btn .button {
   padding: 6px 14px;
   }
   .slide-3 .so_icon {
   justify-content: left;
   margin-top: 78px;
   }
   .slide-3 .so_icon a {
   width: 32px;
   margin: 0 6px;
   height: 32px;
   }
   .slide-3 .so_icon a:first-child {
   margin-left: 0;
   }
   .slide-3 .so_icon img {
   max-width: 16px;
   }
   @media (min-width: 768px) and (max-width: 991px) {
   .service_inner_content1 {
   width: 49%;
   margin-bottom: 15px;
   }
   }
   @media (min-width: 550px) and (max-width: 767px) {
   .carousel {
   height: 550px !important;
   }
   }
   @media (max-width: 767px) {
   .service_inner_content1 {
   margin-bottom: 15px;
   }
   .banner-left {
   padding: 0 10px;
   }
   .carousel {
   height: 510px;
   }
   .nav_sub_menu {
   min-width: inherit !important;
   left: 0% !important;
   height: auto !important;
   transform: translateX(0%) !important;
   }
   }
   .slide-3-overlay {
   content: "";
   position: absolute;
   top: -200px;
   left: 0;
   z-index: -1;
   width: 100%;
   height: 100rem;
   background: rgb(69 78 85);
   opacity: 0.3;
   }.banner_btn.slidebtns .button :hover{
   color: #f3bd48 !important;
   }.service_inner_content h3{
   justify-content: center;
   }
</style>
<!-- Slider -->
<section class="slider-section banner">
   <div class="banner-innner">
      <div id="carousel" class="carousel slide" data-ride="carousel">
         <!-- Indicators -->
         <ol class="carousel-indicators d-none">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
         </ol>
         <!-- End of Indicators -->
         <!-- Carousel Content -->
         <div class="carousel-inner" role="listbox">
            <?php $slide1= get_field('slide_1');
               if ($slide1){
                   
               
               ?>
            <div class="carousel-item active">
               <div class="d-md-block">
                  <div class="banner-left">
                     <h2><?php echo $slide1['heading'];?></h2>
                     <img src="<?php echo $slide1['slider_image'];?>" class="img-fluid img_xxi101">
                     <?php echo $slide1['containt'];?>
                     <!-- <div class="banner_btn">
                        <a href="#" class="button">Take The High Road</a>
                        </div> -->
                  </div>
               </div>
               <video autoplay muted loop class="tagline-video">
                  <source class="h-100" src="<?php echo $slide1['video'];?>" type="video/mp4" />
               </video>
               <div class="slide-1-overlay"></div>
            </div>
            <?php     }
               ?>
            <?php $slide2= get_field('slide_2');
               if ($slide2){
                   
               
               ?>
            <div class="carousel-item">
               <div class="d-md-block">
                  <div class="banner-left">
                     <h2><?php echo $slide2['heading'];?></h2>
                     <img src="<?php echo $slide2['slider_image'];?>" class="img-fluid img_xxi101 slide-2-img">
                     <?php echo $slide2['containt'];?>
                  </div>
               </div>
               <video autoplay muted loop class="tagline-video">
                  <source class="h-100"
                     src="<?php echo $slide2['video'];?>"
                     type="video/mp4" />
               </video>
            </div>
            <?php     }
               ?>
            <?php $slide3= get_field('slide_3');
               if ($slide3){?>
            <div class="carousel-item">
               <div class="d-md-block container slide-3" style="max-width: 1000px;">
                  <div class="banner-left text-left">
                     <div class="slider3_logo">
                        <img src="<?php echo $slide3['slider3_logo'] ?>" class="img-fluid img_xxi101">
                        <?php echo $slide3['containt']; ?>
                     </div>
                     <?php if($slide3['so_icon']==true):?>
                     <div class="so_icon">
                        <a href="<?php the_field('instagram','options'); ?>"><img src="<?php bloginfo('template_url'); ?>/images/instagram.png" class="img-fluid"></a>
                        <a href="<?php the_field('linkedin','options'); ?>"><img src="<?php bloginfo('template_url'); ?>/images/linkedin.png" class="img-fluid"></a>
                        <a href="<?php the_field('facebook','options'); ?>"><img src="<?php bloginfo('template_url'); ?>/images/facebook.png" class="img-fluid"></a>
                        <a href="<?php the_field('threads','options'); ?>"><img src="<?php bloginfo('template_url'); ?>/images/threads.png" class="img-fluid"></a>                           
                        <a href="<?php the_field('youtube','options'); ?>"><img src="<?php bloginfo('template_url'); ?>/images/youtube.png" class="img-fluid"></a>
                     </div>
                     <?php endif;?>
                  </div>
               </div>
               <img src="<?php echo $slide3['big_image']?>" class="banner-bg-image">
               <div class="slide-3-overlay"></div>
            </div>
            <?php     }
               ?>
         </div>
         <!-- Previous & Next -->
         <a href="#carousel" class="carousel-control-prev" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="sr-only"></span>
         </a>
         <a href="#carousel" class="carousel-control-next" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="sr-only"></span>
         </a>
      </div>
      <!-- End of Carousel -->
   </div>
</section>
<!-- End of Slider -->

<div class="b4btndiv">

<div class="b4btndiv_button ">
    <?php 
$subscribe_button = get_field('subscribe_button','option');
if( $subscribe_button ): 
    $link_url = $subscribe_button['url'];
    $link_title = $subscribe_button['title'];
    $link_target = $subscribe_button['target'] ? $subscribe_button['target'] : '_self';
    ?>
    <a class="button btn_upx" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
<?php endif; ?>
    
     <h4 class="m-0 ms-3 "><?php the_field('subscribe_button_heading')?></h4>

</div>
<?php ?>


<?php if( have_rows('buttons_group') ): $count=1;?>
 <?php while( have_rows('buttons_group') ): the_row(); ?>
      
        <?php 
$buttons_grouplink = get_sub_field('link');
if( $buttons_grouplink ): 
    $link_url = $buttons_grouplink['url'];
    $link_title = $buttons_grouplink['title'];
    $link_target = $buttons_grouplink['target'] ? $buttons_grouplink['target'] : '_self';
    ?>
    <a class="b4btndiv_button bx1 buttonb1" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
<?php endif; ?>
    


               <?php endwhile; ?>
               <?php endif; ?>


</div>

<!-- button div -->
<style type="text/css">
   section.service_area {
   background: #EDEFEC;
   }.service_inner_content {
   border-right: 3px solid #C5CDD4;
   }.service_area:before{
   background: #EDEFEC;
   }
   .service_inner_content h3{
   background-color:#EDEFEC ;
   font-size: 17px;
   line-height: 1.6em;
   text-align: center;
   height: auto;
   background-color: none;
   text-shadow: none;
   color: #1B232A;
   }.service_inner_content {
   padding: 35px 15px;
   }
</style>
<section class="service_area">
   <div class="container-fluid">
      <div class="row">
         <div class="col-md-12">
            <div class="service_inner">
               <?php if( have_rows('icon_group') ): 
                  $count=1;
                  ?>
               <?php while( have_rows('icon_group') ): the_row(); 
                  ?>
               <div class="service_inner_content">
                  <img src="<?php the_sub_field('icon') ?>" class="img-fluid">
                  <h3>
                     <?php the_sub_field('heading') ?>
                  </h3>
               </div>
               <?php endwhile; ?>
               <?php endif; ?>
            </div>
         </div>
      </div>
   </div>
</section>
<style type="text/css">
   #background-color-divx{
   background-color: #7E696D;
   padding: 15px;
   text-align: center;
   color: white;
   font-size: 23px;
   font-weight: bold;
   font-family: open sans,sans-serif;
   }
</style>
<div id="background-color-divx">
<?php if( have_rows('colour_full_headings') ): 
                   $colors = array(); // Initialize an empty array
                  ?>
               <?php while( have_rows('colour_full_headings') ): the_row(); 
                   $colors[] = get_sub_field('colour');
                  ?><?php endwhile; ?>
    <?php endif; ?>
   <h3 style="font-size:23px;margin:0; font-weight: bold;" > <?php the_field('headingc1') ?> </h3>
   
</div>
<script>
   // Function to change background color
   function changeBackgroundColor() {
     var colors = <?php echo json_encode($colors); ?> // Array of colors
     var container = document.getElementById('background-color-divx'); // Get the container element
     var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Choose a random color from the array
     container.style.backgroundColor = randomColor; // Apply the random color to the container background
   }
   
   // Change background color every 3 seconds
   setInterval(changeBackgroundColor, 3000);
</script>
<style>
            .product_inner {
                background: transparent;
            }

            .product_inner h3 {
                color: #fff;
                font-size: 20px;
                padding-top: 45px;
            }
            .product_categories_area ul{
                display: flex;
                justify-content: space-between;
                align-items: end;
                margin: 0;
                padding: 0;
            }.product_categories_area ul {
    flex-wrap: wrap;
    align-items: flex-end;
    text-align: center;
    justify-content: space-evenly;
}
            .product_categories_area ul li{
                list-style: none;
            }
            .product_categories_area .catergories1{
                padding: 0 115px;
            }
            .product_categories_area .catergories2{
               margin-top: -30px;
            }
            .h2_heading_x1{
               color: rgb(243,189,72);
            }
           h2.product_heading {
    background: #1B232A;
    padding: 30px 15px 20px 15px;
    
    margin: 0;
}p.text_bottom a {
    color: #fff;
    text-decoration: underline;
}
p.text_bottom {
    color: white;
    text-align: center;
    margin: 0;
    width: 100%;
}
        </style>
        <section class="product_categories_area pd-top"
            style="background-color: #1B232A;background-image:linear-gradient(#1b232afa, #1b232afa), url(images/shopbgimage.webp)">

            <div class="container">
                <div class="row">
                    <?php the_field('product_heading_and_title');?>


                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <ul class="catergories1">

                           <?php while( have_rows('products_online') ): the_row(); 
                  ?>
                            <li>
                                <div class="product_inner">
                                    <img src="<?php echo get_sub_field('image');?>"
                                        class="img-fluid">
                                    <?php echo get_sub_field('heading');?>
                                </div>
                            </li>


<?php endwhile; ?>
                           
                        </ul>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <ul class="catergories2">
                            <?php while( have_rows('products_online2') ): the_row(); 
                  ?>
                            <li>
                                <div class="product_inner">
                                    <img src="<?php echo get_sub_field('image');?>"
                                        class="img-fluid">
                                     <?php echo get_sub_field('heading');?>
                                </div>
                            </li>


<?php endwhile; ?>
                            
                        </ul>
                    </div>
                    <?php echo get_field('product_description');?>

                </div>
            </div>
        </section>


<style>
            .shape_image {
                position: relative;
                background: #1B232A;
            }

            .shape_image::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 200px;
                background: url(<?php bloginfo('template_url'); ?>/images/round_shape.svg);
            }
            .shape_image::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 200px;
                background: url(<?php bloginfo('template_url'); ?>/images/round_shape.svg);
                transform: scaleY(-1);
            }
            .shape_image img{
                object-fit: cover;
                width: 100%;
            }
        </style>
        <section class="shape_image">
            <img src="<?php the_field('shape_image'); ?>">
        </section>
 <h2 class="product_heading h2_heading_x1 lt_sp"><?php the_field('news_heading') ;?></h2> 


<style type="text/css">.service_area1:before {
    
    background-image: none;
   
}</style>
<section class="service_area1" style="padding: 15px; background-image: none;">
   <div class="overlay_bg"></div>
   <div class="container-fluid" style="padding: 0px;">
      <div class="row">
        
         <div class="col-md-12">
            <div class="service_inner1">
               <?php
                  // Define the query to retrieve the first 5 blog posts
                  $args = array(
                      'post_type' => 'post', // Change to 'page' if you want to retrieve pages instead of posts
                      'posts_per_page' => 5,
                  );
                  
                  $blog_posts = new WP_Query($args);
                  
                  if ($blog_posts->have_posts()) :
                      while ($blog_posts->have_posts()) : $blog_posts->the_post();
                  ?>
               <div class="service_inner_content1">
                  <?php
                     // Display the featured image within an <img> tag
                     if (has_post_thumbnail()) {
                         echo '<img src="' . esc_url(get_the_post_thumbnail_url()) . '" class="img-fluid" />';
                     }
                     ?>
                  <span>Aug 18</span>
                  <?php
                     // Display the categories
                     $categories = get_the_category();
                     if ($categories) {
                         echo '<span>';
                         foreach ($categories as $category) {
                             echo '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a> ';
                         }
                         echo '</span>';
                     }
                     ?>
                  <a href="<?php the_permalink(); ?>">
                     <h3> <?php the_title(); ?></h3>
                  </a>
               </div>
               <?php
                  endwhile;
                  wp_reset_postdata(); // Reset the query to its original state
                  else :
                  echo 'No posts found.';
                  endif;
                  ?>
            </div>
         </div>
      </div>
   </div>
</section>

<?php get_template_part('template-parts/content/join-now-about-section'); ?>


<section class="feed_now" style="display:none;background-image:linear-gradient(#f8f7f2fa, #f8f7f2f0), url(<?php bloginfo('template_url'); ?>/images/bg-3.webp);">
   <div class="container">
      <div class="row justify-content-center" style="margin-right: 0;margin-left: 0;">
         <div class="col-md-12">
            <div class="feed_area">
               <h2 class="ConnectWithus" style="text-align: center;padding-bottom: 15px;font-size: 62px;">Connect With Us</h2>
               <?php echo do_shortcode('[IFG instagram_acces_token="IGQWRNd3J6ZA3Y2MnJHcm1JbWpoYWJfWTQ1ZAnozcjRIV0hqeGRYaW9udzU5bHFJeXBYQmpETm9mWmlvelNxNV9LbUI2NFhPcWxoZAEJfRktsM0RZAdFh1LXJDemhmaUlIZAVI5SUFCcjN6aDBjMVFZAMkdHUE9tMTlibU0ZD" insta_layout="insta_layout_grid" insta_grid_columns_l="3" insta_image_limit="21" insta_image_spacing="5" insta_caption_image="yes" insta_link_redirection="_new" insta_lightbox_color="#ffffff" ]'); ?>
            </div>
         </div>
      </div>
   </div>
</section>
















<?php
   // Check if the user is logged in and their age is confirmed
   if ( !isset($_COOKIE['age_confirmed'])) {
   ?>
<?php
   $welcome_popup = get_field('welcome_popup');
   if( $welcome_popup ): ?>
<div class="popup" id="ageConfirmationPopup">
   <div class="popup-content">
      <img style="max-width: 250px;"src="<?php echo  $welcome_popup['image'] ; ?>">
      <div class="divxfor_popup">
         <p style="font-size: 34px; font-weight: bold;"><?php echo $welcome_popup['heading']; ?></p>
         <button type="button"  class=" divxfor_popup_btnx" id="confirmButton">Yep</button><button type="button" class="divxfor_popup_btnx" id="Nope">Nope</button>
      </div>
      <div style="font-size: 14px;"> <?php echo  $welcome_popup['description'] ; ?> </div>
      <div style="padding: 15px;">
         <!-- <input style="width: 20px;" type="checkbox" checked="true" id="agreeCheckbox">
            <label for="agreeCheckbox">I AGREE</label> -->
      </div>
      <div class="popup-content_lasttjoin">
         <h1 class="text_shadow2"style="font-size:26px; font-weight: bold; ">Sign up now to earn rewards!</h1>
         <a href="<?php the_field('subscribe_link');?>" class="divxfor_popup_btnx">Join Now</a>
      </div>
   </div>
</div>
<style type="text/css">
   .popup {
   display: none;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-image:url(<?php echo  $welcome_popup['background_image'] ; ?>);
   background-size: cover;
   text-align: center;
   z-index: 9999;
   align-items: center;
   }
   .popup-content {
   background: #1F2326;
   width: 100%;
   max-width: 768px;
   color: white;
   margin: 0 auto;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   }.popup-content_lasttjoin {
   display: flex;
   justify-content: center;
   align-items: center;
   column-gap: 40px;
   background-color: #688A7E;
   padding: 20px;
   border-bottom-left-radius: 50px ;
   border-bottom-right-radius: 50px ;
   }.popup-content p {
   margin: 0;
   }a.divxfor_popup_btnx:hover {
   border-color: #454E55;
   background: #454E55;
   color: white !important;
   text-decoration: none;
   }a.divxfor_popup_btnx{
   font-weight: bold;
   border-color: black;
   background: white;
   color: black;
   text-decoration: none;
   padding: 5px 15px;
   border-radius: 10px;
   }
   @media only screen and (max-width: 767px) {.popup-content_lasttjoin {
   border-bottom-left-radius: 0px ;
   border-bottom-right-radius: 0px ;
   }}
   <?php endif; ?>
   <?php
      }
      ?>
</style>
<script type="text/javascript">
   document.addEventListener("DOMContentLoaded", function() {
     // Get the popup element and the confirm button
     var popup = document.getElementById("ageConfirmationPopup");
     var confirmButton = document.getElementById("confirmButton");
   var Nope = document.getElementById("Nope");
     // Show the popup on page load
     popup.style.display = "flex";
   
     // Add a click event listener to the confirm button
     confirmButton.addEventListener("click", function() {
         // Close the popup when the button is clicked
         var now = new Date();
         var twoMinutesLater = new Date(now.getTime() + 2 * 60 * 1000); // 2 minutes later
         
         document.cookie = "age_confirmed=true; expires=" + twoMinutesLater.toUTCString() + "; path=/";
         //document.getElementById('ageConfirmationPopup').style.display = 'none';
         popup.style.display = "none";
     });
     // Add a click event listener to the confirm button
     Nope.addEventListener("click", function() {
         // Close the popup when the button is clicked
   
         popup.style.display = "none";
     });
   });
   
   
</script>
<?php get_footer(); ?>