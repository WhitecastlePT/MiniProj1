<script setup>
import Footer from './components/Footer.vue'
import profileImage from './assets/images/me44.png'
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
              <router-link to="/quem-sou" class="btn-nav" active-class="activo">
                Quem sou eu?
              </router-link>
              <router-link to="/o-que-faco" class="btn-nav" active-class="activo">
                O que faço?
              </router-link>
              <router-link to="/hobbies" class="btn-nav" active-class="activo">
                Hobbies
              </router-link>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <main class="conteudo-principal">
      <div class="contentor">
        <router-view />
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
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s ease;
}

.btn-nav:hover {
  background: #5568d3;
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
  #app {
    padding: 0 !important;
  }

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
