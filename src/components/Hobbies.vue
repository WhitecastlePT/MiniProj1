<script setup></script>

<template>
  <div class="caixaSeccao">
    <h2 class="tituloSeccao">Hobbies</h2>
    <div class="conteudo">

      <div class="texto-bio">
        <p>
          Fora do trabalho, continuo ligado à tecnologia — programo e desenvolvo websites por gosto e curiosidade, explorando novas ideias e ferramentas. Sou também um entusiasta de impressão 3D, fascinado pelo processo criativo de transformar modelos digitais em objetos reais.
        </p>
        <p>
          Sou gamer e aprecio videojogos de praticamente todos os géneros, tanto pela diversão como pela criatividade e desafios que proporcionam. Interesso-me ainda por carpintaria, onde encontro uma forma diferente de construir e criar com as mãos.
        </p>
        <p>
          Gosto de ver filmes e séries, especialmente quando abordam temas de ficção científica, tecnologia ou história. Tenho também um interesse constante por política e por artigos científicos, sobretudo ligados a novas tecnologias — não apenas na área da engenharia informática, mas também em campos como ciência espacial, medicina, robótica, computação quântica e novos avanços em hardware e chips.
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* secção principal */
.caixaSeccao {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  padding: 2rem;
  box-shadow: 0 4px 0px rgba(0, 0, 0, 0.3);
  min-height: 784px;
}

.tituloSeccao {
  color: #a0aec0;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 3px solid #667eea;
  padding-bottom: 1rem;
}

.conteudo {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* biografia */
.texto-bio {
  line-height: 1.8;
  color: #cbd5e0;
}

.texto-bio p {
  margin-bottom: 1rem;
  text-align: justify;
}

/* Media Queries - Tablet */
@media screen and (max-width: 1024px) {
  .caixaSeccao {
    padding: 1.5rem;
    min-height: auto;
  }

  .tituloSeccao {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .conteudo {
    gap: 1.5rem;
  }
}

/* Media Queries - Mobile */
@media screen and (max-width: 768px) {
  .caixaSeccao {
    padding: 1rem;
    min-height: auto;
  }

  .tituloSeccao {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom-width: 2px;
  }

  .conteudo {
    gap: 1rem;
  }

  .texto-bio {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .texto-bio p {
    margin-bottom: 0.75rem;
  }
}
</style>
