<div class="news-item">

                    <a href="[field:arcurl/]">
                  <div class="news-item-header">
                  <p class="title">
                      [field:title/]               
                  </p>
                  <p>
                      <span class="small" style="font-weight:normal;">
                        [field:writer/]
                      </span>&nbsp;
                    <span class="text-grey small" style="font-weight:normal;">
                      [[field:pubdate function="GetDateTimeMK(@me)"/]]
                    </span>
                  </p>
                    </div>
                    <div class="news-body">
                      <p>
                          [field:description function='cn_substr(Html2text("@me")."...",80)'/]
                      </p>
                    </div>
                </a>
              </div>