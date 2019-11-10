<template>
<div>
   <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Odney </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                data-toggle="modal"
                data-target="#logoutModal"
                href="#"
                class="nav-link"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
    </nav>
    <router-view/>
    <logout />
</div>
  
</template>

<script>
import Logout from '@/components/Logout.vue';

export default {
  components: {
    Logout,
  },
  name: 'App',
};
</script>

<style>
.padding{
  padding-top: 80px;
}
.border-left-primary {
  border-left: 0.25rem solid var(--primary) !important;
}

.border-left-secondary {
  border-left: 0.25rem solid #858796 !important;
}

.border-left-success {
  border-left: 0.25rem solid #28a745 !important;
}

.border-left-info {
  border-left: 0.25rem solid #36b9cc !important;
}

form{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
}

</style>