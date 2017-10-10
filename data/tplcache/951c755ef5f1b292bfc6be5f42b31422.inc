<li class="sepeator"></li>
        <li><a href="{dede:field name='typeurl'/}" onmouseover="ypSlideOutMenu.showMenu('menu{dede:global name=itemindex runphp='yes'}@me=@me+1;{/dede:global}');" onmouseout="ypSlideOutMenu.hideMenu('menu2')">{dede:field name='typename'/}</a>
          <div  class='subNav'>
            <div id='menu{dede:global name=itemindex runphp='yes'}@me=@me+1;{/dede:global}Container'>
              <div id='menu{dede:global name=itemindex runphp='yes'}@me=@me+1;{/dede:global}Content' class='menu'>
                <ul>
                  {dede:channel type='son' noself='yes'}
                  <li><a href="[field:typelink/]">[field:typename/]</a></li>
                  {/dede:channel}
                </ul>
              </div>
            </div>
          </div>
        </li>