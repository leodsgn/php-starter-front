<?php

  $attach = true;
  $width  = false ? '100%' : 'auto';
  $height = false ? '100%' : 'auto';
  $source = 'https://www.youtube.com/embed/b_2H59OEIKU';
  
?>

<?php if( $a ) { ?>
  <section class="video">
    <iframe width="<?php echo $width; ?>" height="<?php $height; ?>" src="<?php echo $source; ?>" frameborder="0" allowfullscreen></iframe>
  </section>
<?php }?>
