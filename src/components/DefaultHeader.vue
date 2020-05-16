<template>
  <header class="bg-black">
    <Countdown
      :starttime="new Date()"
      endtime="May 16, 2020 00:10:00"
      trans='{  
         "day":" dias",
         "hours":"h",
         "minutes":"min",
         "seconds":"s",
         "expired":"Event has been expired.",
         "running":"Para encerrarmos as vendas",
         "upcoming":"Till start of event.",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'
    />
    <div class="container">
      <div class="flex flex-wrap justify-between pt-4">
        <g-link to="/" class="sm:px-4 w-full sm:w-1/2" id="logo-header">
          <g-image
            quality="100"
            height="60"
            src="~/assets/images/logo.png"
            fit="inside"
            alt="Guten Morgen GO"
          />
        </g-link>
        <div class="pr-2 sm:px-4 ml-auto sm:ml-0 text-left">
          <call-to-action
            filled="bege"
            border
            :link="$static.generalData.hotmartUrl"
            size="md"
            class="sm:mx-2 text-sm sm:text-base"
          >
            Inscreva-se
          </call-to-action>
          <!-- http://membros.sensoincomum.org -->
          <call-to-action
            border
            link="http://membros.sensoincomum.org"
            size="md"
            class="ml-2 sm:mx-2 text-sm sm:text-base"
          >
            <User /> <span class="pl-3">Login</span>
          </call-to-action>
        </div>
      </div>
    </div>
  </header>
</template>

<static-query>
query{
  generalData(id: "1"){
    hotmartUrl
  }
}
</static-query>

<script>
import CTA from '~/components/shared/Cta'
import Countdown from '~/components/shared/Countdown'
import User from '~/assets/images/user.svg'

export default {
  name: 'DefaultHeader',
  components: {
    'call-to-action': CTA,
    User,
    Countdown
  }
}
</script>

<style lang="scss">
#logo-header {
  @media (max-width: 639px) {
    width: 200px;
  }
}
</style>
