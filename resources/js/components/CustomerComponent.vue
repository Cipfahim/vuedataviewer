<template>
   <div id="customer">
       <div class="row justify-content-center">
           <div class="col-md-12">
               <div class="card">
                   <div class="card-header">Customers</div>

                   <div class="card-body">
                       <div class="table-responsive">
                           <table class="table table-hover table-bordered table-striped">
                               <thead>
                               <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">First</th>
                                   <th scope="col">Last</th>
                                   <th scope="col">Handle</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr>
                                   <th scope="row">1</th>
                                   <td>Mark</td>
                                   <td>Otto</td>
                                   <td>@mdo</td>
                               </tr>
                               <tr>
                                   <th scope="row">2</th>
                                   <td>Jacob</td>
                                   <td>Thornton</td>
                                   <td>@fat</td>
                               </tr>
                               <tr>
                                   <th scope="row">3</th>
                                   <td colspan="2">Larry the Bird</td>
                                   <td>@twitter</td>
                               </tr>
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
