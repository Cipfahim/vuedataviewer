<template>
   <div id="customer">
       <div class="row justify-content-center">
           <div class="col-md-12">
               <div class="card">
                   <div class="card-header">Customers</div>

                   <div class="card-body">
                       <form class="mb-3">
                           <div class="row">
                               <div class="col-md-2">
                                   <strong>Search By : </strong>
                               </div>
                               <div class="col-md-3">
                                   <select class="form-control" id="fileds">
                                       <option value="name">Name</option>
                                       <option value="email">Email</option>
                                       <option value="phone">Phone</option>
                                       <option value="total">Total</option>
                                   </select>
                               </div>
                               <div class="col-md-7">
                                   <input type="text" class="form-control" placeholder="Search">
                               </div>
                           </div>
                       </form>
                       <div class="table-responsive">
                           <table class="table table-hover table-bordered table-striped">
                               <thead>
                               <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">Name</th>
                                   <th scope="col">Email</th>
                                   <th scope="col">Phone</th>
                                   <th scope="col">Total</th>
                                   <th scope="col" class="text-center">Action</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr v-for="(customer, index) in customers" :key="customer.id">
                                   <th scope="row">{{ customer.id }}</th>
                                   <td>{{ customer.name}}</td>
                                   <td>{{ customer.email }}</td>
                                   <td>{{ customer.phone }}</td>
                                   <td>{{ customer.total }}</td>
                                   <td class="text-center">
                                       <button type="button" class="btn btn-info btn-sm">
                                           <i class="fas fa-eye"></i>
                                       </button>
                                       <button type="button" class="btn btn-primary btn-sm">
                                           <i class="fas fa-edit"></i>
                                       </button>
                                       <button type="button" class="btn btn-danger btn-sm">
                                           <i class="fas fa-trash-alt"></i>
                                       </button>
                                   </td>
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
        data () {
            return {
                customers: [],
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData(){
                this.$Progress.start()
                axios.get('/api/customers')
                    .then(response => {
                        this.customers = response.data.data
                        this.$Progress.finish()
                    })
                    .catch(e => {
                        console.log(e)
                        this.$Progress.fail()
                    })
            },
        }
    }
</script>
