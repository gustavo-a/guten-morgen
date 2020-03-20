<template>
  <section class="py-16">
    <div class="container">
      <div class="flex justify-center mb-16">
        <div>
          <h2 class="title-1">
            Os Módulos
          </h2>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="timeline w-full lg:w-3/4">
          <ol>
            <li>
              <div class="content">
                <div class="titulo">
                  O cenário da Europa antes da Guerra e o início do conflito
                </div>
                
                <div class="descricao">
                  O mundo antes da Guerra e o mundo após o conflito são completamente irreconhecíveis. Monarquias foram substituídas por democracias, famílias tradicionais por ideologias modernizantes - a Europa e o mundo mudaram radicalmente em 4 anos.
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  Cavando trincheiras contra a tecnologia militar 
                </div>
                
                <div class="descricao">
                  As cenas da Primeira Guerra mereciam muito mais destaque nos cinemas: desde a primeira batalha, na Bélgica, diariamente cenas de terror (e adrenalina) ocorriam. As mudanças na tecnologia militar dos primeiros conflitos forçaram uma medida desesperada: cavar trincheiras para alguém poder sobreviver.
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  Morte em escala industrial
                </div>
                
                <div class="descricao">
                  A dura lição da guerra, e o que fez um conflito aparentemente banal em uma região geralmente esquecida do mundo se transformar no maior morticínio que o mundo já havia visto, foi que a tecnologia de matar também avançou muito com a Revolução Industrial.
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  A sombria “paz” e as conseqüências que duram até hoje
                </div>
                
                <div class="descricao">
                  É um costume pensarmos no mundo antigo, de reis, Estados confessionais e moral pública, e no mundo moderno, de democracia, laicismo e ideologias progressistas, acreditando que tudo mudou naturalmente. Foi o fim violentíssimo da Primeira Guerra que fez surgir o nosso mundo.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Modulos'
}
</script>

<style lang="scss" scoped>
.timeline {
  @apply .relative;

  &::before {
    content: '';
    width: 3px;
    height: 75%;
    background: rgba($color: #b29965, $alpha: 0.4);
    @apply .block .absolute .m-auto .right-0 .left-0;
  }
  ol {
    counter-reset: number;
    position: relative;

    li {
      &::before {
        counter-increment: number;
        content: counter(number);
        @apply .absolute .right-0 .left-0 .m-auto .block .text-center .text-white .bg-guten-bege .text-2xl .rounded-full .font-serif;
        width: 36px;
        height: 36px;
      }

      .content {
        width: 50%;
      }

      &:nth-of-type(odd) {
        .content {
          @apply .text-right .pr-16;
        }
      }

      &:nth-of-type(even) {
        .content {
          @apply .text-left .pl-16;
          transform: translate3d(100%, 0, 0);
        }
      }

      @media (max-width: 767px) {
        &:nth-of-type(odd) {
          .content {
            @apply .pr-12;
          }
        }

        &:nth-of-type(even) {
          .content {
            @apply .pl-12;
          }
        }
      }

      @media (max-width: 767px) {
        &:nth-of-type(odd),
        &:nth-of-type(even) {
          .content {
            @apply .mb-16 .pt-16 .text-center .pr-0 .pl-0;
            transform: translate3d(50%, 0, 0);
            * {
              background: #fff;
            }
          }
        }
      }

      @media (max-width: 500px) {
        &:nth-of-type(odd),
        &:nth-of-type(even) {
          .content {
            width: 100%;
            @apply .pr-4 .pl-4;
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  .titulo {
    @apply .font-serif .text-xl .italic .text-guten-bege;
  }

  .duracao {
    @apply .font-bold .mb-4;
  }
}
</style>
