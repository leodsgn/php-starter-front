<?php

  $attach = true;
  $thumb  = true;
  $avatar = true;
  $cont   = true;
  $tpcont = 'bordered'; // overlay // fullwidth // simple
  $filter = true;
  $basel  = false ? '20%' : '30%';

?>


<?php if( $a ) { ?>
  <section class="gallery">
    <?php if( $filter ) { ?>
      <div class="filter">
        <input placeholder="Procurar" />
        <ul>
          <li>Filtro 1</li>
          <li>Filtro 2</li>
          <li>Filtro 3</li>
          <li>Filtro 4</li>
          <li>Filtro 5</li>
        </ul>
      </div>
    <?php } ?>

    <div class="grid <?php echo $tpcont; ?>">

      <?php for($i = 0; $i < 20; $i++) { ?>
        
        <a href="" class="item">
          <?php if( $thumb ) { ?>
            <img src="" />
          <?php } else { ?>
            <i class="fa fa-<?php //fontawesome icon ?>"></i>
          <?php } ?>
          <?php if( $cont ) { ?>
            <div class="content">
              //content
            </div>
          <?php } ?>
        </a>

      <?php } ?>

    </div>
  </section>
<?php } ?>
