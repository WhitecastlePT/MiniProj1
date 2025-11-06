<script setup></script>

<template>
  <div class="caixaSeccao">
    <h2 class="tituloSeccao">O que faço?</h2>
    <div class="conteudo">

      <div class="texto-bio">
        <p>
          Sou um Desenvolvedor Full-Stack apaixonado por tecnologia, com um foco especial no desenvolvimento backend e uma base sólida em tecnologias web. A minha carreira começou com as linguagens e ferramentas fundamentais da web — JavaScript, HTML, CSS e jQuery — que continuam a ser a base do meu trabalho e da minha forma de resolver problemas.
        </p>
        <p>
          Com o tempo, expandi os meus conhecimentos para incluir frameworks e tecnologias modernas como Vue.js, Angular, Java (Spring Boot) e Node.js. Trabalho de forma confortável em todo o ciclo de desenvolvimento, desde a criação de interfaces até à integração de APIs, gestão de dados e implementação de aplicações com Docker.
        </p>
        <p>
          Sou proficiente em PostgreSQL e tenho experiência prática com DB2 e Informix, principalmente em ambientes empresariais. Trabalho regularmente com XML, JSON e Web Services para integração e troca de informação entre sistemas.
        </p>
        <p>
          Sou um profissional autodidata, em constante aprendizagem, combinando estudo independente com experiência prática e formação académica em Desenvolvimento de Software. Programar não é apenas a minha profissão — é o que realmente gosto de fazer: resolver problemas, melhorar sistemas e aprender algo novo todos os dias.
        </p>
        <p>
          Estou sempre aberto a novos desafios, colaborações e oportunidades de crescimento como desenvolvedor.
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
  min-height: 775px;
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

/* informações de contacto */
.grelhaInfo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.item-dado {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-dado strong {
  color: #a0c4ff;
  font-size: 0.9rem;
}

.item-dado span {
  color: #e2e8f0;
  font-size: 1rem;
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
