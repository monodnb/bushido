<?php
/**
 * Template name: Frontpage
 *
 * @package bushido
 */

get_header(); ?>

<div id="frontpage" data-role="page">
    <div class="row red"></div>
    <div class="row"></div>
    <div class="row">
        <div class="card" style="background-color: rgb(108, 171, 218);">
            <div class="card-image">
                <img src="http://localhost/wp-content/uploads/2015/03/lovita2_0002_Layer-Comp-3-1024x1024-300x300.jpg" alt="">
            </div>
            <div class="card-overlay" style="background-color: rgb(108, 171, 218);"></div>
            <div class="card-info">
                <span class="card-title">El Dulce de Loco</span>
            </div>
            <div class="card-action floating-action right">
                    <img class="responsive-img" src="http://localhost/wp-content/uploads/2015/03/play.svg" href="http://localhost/portfolio-item/el-dulce-de-loco/">
                </div>
        </div>
    </div>
    <div class="row"></div>
    <button>Agree</button>
    <button>Disagree</button>
    <button class="raised">Accept</button>
    <button class="colored pull-left">Ok</button>
    <button class="colored, pull-right">Cancel</button>
    </br>
</div>

<?php get_footer(); ?>
