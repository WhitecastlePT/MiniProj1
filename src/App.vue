<script setup>
import { ref } from 'vue'
import QuemSou from './components/QuemSou.vue'
import OQueFaco from './components/OQueFaco.vue'
import Hobbies from './components/Hobbies.vue'
import Footer from './components/Footer.vue'
import profileImage from './assets/images/me44.png'

const currentSection = ref('quem-sou')

const setSection = (section) => {
  currentSection.value = section
}
</script>

<template>
  <div id="app">
    <header class="cabecalho">
      <div class="contentor">
        <div class="conteudoCabecalho">
          <div class="fotoPerfil">
            <img :src="profileImage" alt="Foto de perfil" />
          </div>
          <div class="area-direita">
            <h1 class="titulo">CV - Henrique Crachat</h1>
            <nav class="navegacao">
              <button
                @click="setSection('quem-sou')"
                :class="{ activo: currentSection === 'quem-sou' }"
                class="btn-nav"
              >
                Quem sou eu?
              </button>
              <button
                @click="setSection('o-que-faco')"
                :class="{ activo: currentSection === 'o-que-faco' }"
                class="btn-nav"
              >
                O que faço?
              </button>
              <button
                @click="setSection('hobbies')"
                :class="{ activo: currentSection === 'hobbies' }"
                class="btn-nav"
              >
                Hobbies
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <main class="conteudo-principal">
      <div class="contentor">
        <QuemSou v-if="currentSection === 'quem-sou'" key="quem-sou" />
        <OQueFaco v-else-if="currentSection === 'o-que-faco'" key="o-que-faco" />
        <Hobbies v-else-if="currentSection === 'hobbies'" key="hobbies" />
      </div>
    </main>

    <Footer />
  </div>
</template>

<style>
/* reset basico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contentor {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

/* cabeçalho */
.cabecalho {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem 0;
  position: relative;
  z-index: 10;
}

.conteudoCabecalho {
  display: flex;
  align-items: center;
  gap: 0;
}

.fotoPerfil {
  flex-shrink: 0;
  margin-left: 2rem;
}

.fotoPerfil img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.area-direita {
  flex: 1;
  margin-right: 150px;
}

.titulo {
  color: #e2e8f0;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

/* navegação */
.navegacao {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-nav {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
}

.btn-nav.activo {
  background: #1e3a5f;
  box-shadow: 0 4px 12px rgba(30, 58, 95, 0.6);
}

.conteudo-principal {
  flex: 1;
  position: relative;
  z-index: 1;
}

/* Media Queries - Tablet */
@media screen and (max-width: 1024px) {
  .contentor {
    padding: 0 15px;
  }

  .cabecalho {
    padding: 1.5rem 0;
  }

  .conteudoCabecalho {
    flex-direction: column;
    gap: 1.5rem;
  }

  .fotoPerfil {
    margin-left: 0;
  }

  .fotoPerfil img {
    width: 100px;
    height: 100px;
  }

  .area-direita {
    margin-right: 0;
    width: 100%;
  }

  .titulo {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .navegacao {
    gap: 0.75rem;
  }

  .btn-nav {
    padding: 0.7rem 1.2rem;
    font-size: 0.95rem;
  }
}

/* Media Queries - Mobile */
@media screen and (max-width: 768px) {
  .contentor {
    padding: 0 10px;
  }

  .cabecalho {
    padding: 1rem 0;
  }

  .conteudoCabecalho {
    flex-direction: column;
    gap: 1rem;
  }

  .fotoPerfil {
    margin-left: 0;
  }

  .fotoPerfil img {
    width: 80px;
    height: 80px;
  }

  .area-direita {
    margin-right: 0;
    width: 100%;
  }

  .titulo {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .navegacao {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .btn-nav {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
