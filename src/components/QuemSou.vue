<script setup></script>

<template>
  <div class="caixaSeccao">
    <h2 class="tituloSeccao">Quem sou eu?</h2>
    <div class="conteudo">

      <div class="texto-bio">
        <p>
          Nasci no Alentejo, em Portalegre, mas foi em Porto de Mós, Leiria, que vivi e cresci durante a maior parte da minha vida. Desde cedo aprendi o valor do trabalho e da adaptação, tendo passado por experiências muito diferentes: fui pintor de casas, rececionista numa piscina municipal e até bibliotecário numa carrinha móvel, levando livros e histórias a várias localidades.
        </p>
        <p>
          Mais tarde, enquanto trabalhava na biblioteca, decidi seguir o meu interesse pela tecnologia e formei-me em Engenharia Informática na Escola Superior de Tecnologia e Gestão de Leiria (ESTG). Foi um período exigente, mas muito gratificante, em que aprendi a equilibrar responsabilidades e a persistir nos meus objetivos.
        </p>
        <p>
          Após concluir o curso, mudei-me para o concelho de Montemor-o-Velho e atualmente vivo e trabalho na região de Coimbra, na empresa AIRC, localizada no iParque.
        </p>
        <p>
          Sou uma pessoa simples, curiosa e com gosto por aprender, que valoriza tanto a tranquilidade do campo como a energia de novos desafios.
        </p>
      </div>

      <div class="grelhaInfo">
        <div class="item-dado">
          <strong>Email:</strong>
          <span>2501450@estudante.uab.pt</span>
        </div>
        <div class="item-dado">
          <strong>Telefone:</strong>
          <span>+351 912 345 678</span>
        </div>
        <div class="item-dado">
          <strong>Formação:</strong>
          <span>Licenciatura em Informática</span>
        </div>
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
  gap: 15rem;
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
  margin-top: 1rem;
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
</style>
