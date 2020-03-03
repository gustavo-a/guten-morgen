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
                <div class="duracao">+ de 8 mil horas</div>
                <div class="descricao">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda illo, error incidunt magni cum qui culpa odit
                  sapiente sunt. Iure culpa repellendus natus impedit facilis
                  necessitatibus! In animi eius delectus?
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  1915: o ano que virou o mundo de cabeça pra baixo.
                </div>
                <div class="duracao">+ de 8 mil horas</div>
                <div class="descricao">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda illo, error incidunt magni cum qui culpa odit
                  sapiente sunt. Iure culpa repellendus natus impedit facilis
                  necessitatibus! In animi eius delectus?
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  O período mais violento de todos os tempos.
                </div>
                <div class="duracao">+ de 8 mil horas</div>
                <div class="descricao">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda illo, error incidunt magni cum qui culpa odit
                  sapiente sunt. Iure culpa repellendus natus impedit facilis
                  necessitatibus! In animi eius delectus?
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  As mudanças políticas, culturais e comportamentais.
                </div>
                <div class="duracao">+ de 8 mil horas</div>
                <div class="descricao">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda illo, error incidunt magni cum qui culpa odit
                  sapiente sunt. Iure culpa repellendus natus impedit facilis
                  necessitatibus! In animi eius delectus?
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="titulo">
                  O fim da guerra e surgimento do mundo atual.
                </div>
                <div class="duracao">+ de 8 mil horas</div>
                <div class="descricao">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda illo, error incidunt magni cum qui culpa odit
                  sapiente sunt. Iure culpa repellendus natus impedit facilis
                  necessitatibus! In animi eius delectus?
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
    height: 80%;
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
