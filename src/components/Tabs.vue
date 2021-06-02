<template>
  <div>
    <div class="container mb-5 shadow p-0">
      <MDBTabs v-model="activeTabId2">
        <!-- Tabs navs -->
        <MDBTabNav fill tabsClasses="mb-3">
          <MDBTabItem tabId="ex2-1" href="ex2-1"><span class="h6">Link</span></MDBTabItem>
          <MDBTabItem tabId="ex2-2" href="ex2-2" ><span class="h6">Very long link</span></MDBTabItem>
          <MDBTabItem tabId="ex2-3" href="ex2-3"><span class="h6">Another link</span></MDBTabItem>
        </MDBTabNav>
        <!-- Tabs navs -->
        <!-- Tabs content -->
        <MDBTabContent>
          <MDBTabPane tabId="ex2-1">
            <div class="m-r-3 m-l-3 pb-4">
              <h2>Tab 1 content</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              ullam adipisci, error placeat expedita, natus atque doloremque
              nobis aliquam vero eum aliquid dolorum voluptatum. Iure libero
              optio dolore mollitia voluptas repellat laborum soluta perferendis
              culpa quo vero, deleniti expedita, id animi. Neque, debitis ipsa
              sed nam aut obcaecati doloremque enim adipisci vel praesentium
              aliquid atque sit impedit porro labore tempore iure facilis libero
              magnam soluta pariatur blanditiis. Voluptatem eligendi ab rerum
              quibusdam vel fugit, nisi inventore nostrum commodi rem officia
              sint nemo harum sapiente blanditiis ea repudiandae placeat
              doloremque numquam? Quo, vitae nam error optio animi atque fuga
              voluptas repellendus. Maiores odit corrupti ut nam expedita
              delectus accusantium omnis ducimus assumenda quod sit maxime
              aliquid facere ab cumque tempore aspernatur eius harum nobis, modi
              dolor. Ipsa eius, alias itaque porro nam quis quaerat quidem eum
              voluptatibus facilis sit possimus suscipit quisquam a autem
              ratione repellat. Hic consequuntur deleniti voluptatem unde
              molestias fuga, perferendis quod, amet aliquam libero natus
              voluptas id.
            </div>
          </MDBTabPane>
          <MDBTabPane tabId="ex2-2">
            <div class="m-r-3 m-l-3 pb-4">
              <h2>Tab 2 content</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              modi quam porro maiores itaque pariatur totam illo iste unde,
              perferendis excepturi voluptatem tenetur maxime numquam animi,
              alias accusamus distinctio nisi! Inventore ad impedit omnis ipsa
              voluptas, nam ipsam ratione, necessitatibus libero alias itaque
              eaque. Mollitia magni dolorem necessitatibus, tempora eaque odio
              totam consequatur alias distinctio reiciendis dolor quos,
              molestiae ipsa hic earum deserunt excepturi id consequuntur
              veritatis autem iure! Temporibus voluptas sequi earum
              consequuntur. Assumenda nam odio deserunt placeat eius, qui quae
              asperiores consectetur eligendi fugiat! Ipsum, tempora? Odit ad
              itaque magni repellendus minima sint non beatae provident
              distinctio hic possimus consequuntur sapiente dolorem perferendis
              tempore similique, harum a debitis voluptatem velit labore enim
              dolor libero. Beatae ea amet neque! Optio, iste nostrum? At, nisi
              quisquam. Placeat tempora possimus veniam eligendi quis culpa nemo
              earum dolores ut molestias porro, veritatis rerum praesentium,
              quidem, mollitia sequi recusandae at aut aliquam optio.
            </div>
          </MDBTabPane>
          <MDBTabPane tabId="ex2-3">
            <div class="m-r-3 m-l-3 pb-4">
              <h2>Tab 3 content</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dolore dolor deserunt maxime dignissimos? Eveniet reiciendis iste
              sed labore voluptas itaque id sapiente, libero dicta voluptatibus
              praesentium illum eius rem excepturi beatae aut? Quae nemo non
              consectetur doloremque, tenetur eos ipsum assumenda nihil adipisci
              ab, excepturi accusamus repellat, eius odit quisquam ex neque
              voluptatibus inventore a? Fugiat, harum tenetur? Dolorem, magnam
              dolore unde, autem aspernatur quos quisquam dignissimos corporis
              voluptatum, at ex odit reiciendis perferendis quis consequatur
              fuga. Reiciendis rerum numquam, quam omnis ullam laudantium sequi
              assumenda magni voluptate laborum exercitationem quisquam unde
              cupiditate dolor quas iste distinctio velit! Animi ab cumque nam
              numquam tempore dolorum deleniti, fugiat similique dicta, eius
              nesciunt culpa enim fuga, quasi voluptatum assumenda asperiores
              molestias. Et nulla delectus possimus cum debitis vitae pariatur
              cupiditate voluptatem dicta eius minus commodi iure harum
              obcaecati exercitationem eveniet molestias libero neque, sunt
              maxime facere aut earum nesciunt. Tempore facere sint laborum
              temporibus aliquam dolorum corporis quis odio quisquam
              perspiciatis error, facilis beatae exercitationem a impedit rerum.
              Fugiat quas culpa et provident doloremque, iste ducimus fugit
              perferendis itaque quo ipsum voluptatibus. Numquam maiores omnis,
              non fugiat at quos quis necessitatibus adipisci itaque ipsum sed
              hic dolores, laborum voluptate impedit commodi.
            </div>
          </MDBTabPane>
        </MDBTabContent>
        <!-- Tabs content -->
      </MDBTabs>
    </div>
  </div>
</template>

<script>
import {
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  name: "Tabs",
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  },
  setup() {
    const activeTabId2 = ref("ex2-1");

    return {
      activeTabId2,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-gray{
  background-color: 616161;
}
</style>
