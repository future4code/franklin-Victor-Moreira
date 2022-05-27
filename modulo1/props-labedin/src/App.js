import React from 'react';
import './App.css';
import CardCompetencias from './components/CardCompetencias/CardCompetencias';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFRtEwWZSHtVA/profile-displayphoto-shrink_200_200/0/1594201507864?e=1658966400&v=beta&t=D8pKCfAigyXFruqLsdM5_OPomB2ntX-ZOH2CVXy8HwQ"
          nome="Victor Ramon"
          descricao="Olá, me chamo Victor Ramon e estudei na UFRN, e foi lá que me tornei Engenheiro Mecânico e Mestre em Engenharia Elétrica e de Computação. Atualmente estou ingressando na carreira de desenvolvimento de Software como participante do Programa Desenvolve 2022, promovido pelo Grupo Boticário em parceria com a Labenu. Nas horas vagas gosta de praticar Kung Fu, assistir animes e montar Cubo Mágico."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1653569426~hmac=3401735e1b79016f1e23e6cb22d6fd5a"
          nome="Email Pessoal"
          endereco="victoramonfm@gmail.com"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1653569426~hmac=3401735e1b79016f1e23e6cb22d6fd5a"
          nome="Email Institucional 1"
          endereco="victor.moreira@grupoboticario.com.br"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1653569426~hmac=3401735e1b79016f1e23e6cb22d6fd5a"
          nome="Email Institucional 2"
          endereco="victor.moreira.086@ufrn.edu.br"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/684/684809.png"
          nome="Endereço residencial"
          endereco="Rua Figueira, 52 - Nova Parnamirim, Parnamirim - RN, 59152-015"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQE2uTXvISMMwA/company-logo_100_100/0/1625143274996?e=1661385600&v=beta&t=Cvuvh8ICkgo8lUXZkhp6-b7V0WbK6DqDI-CHeQoIgQQ"
          nome="Grupo Boticário"
          cargo="Desenvolvedor full stack"
          data="abr de 2022 - o momento · 2 meses"
          descricao="Natal, Rio Grande do Norte, Brasil"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_100_100/0/1568064674419?e=1661385600&v=beta&t=CLV9waBjGyGJpzC9CvtNip_v5WcF4rYJAIP6vMU8bXY"
          nome="Universidade Federal do Rio Grande do Norte"
          cargo="Professor Substituto do Magistério Superior"
          data="abr de 2022 - o momento · 2 meses"
          descricao="Natal, Rio Grande do Norte, Brasil"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_100_100/0/1568064674419?e=1661385600&v=beta&t=CLV9waBjGyGJpzC9CvtNip_v5WcF4rYJAIP6vMU8bXY"
          nome="Universidade Federal do Rio Grande do Norte"
          cargo="Bolsista de Mestrado"
          data="jan de 2019 - jul de 2021 · 2 anos 7 meses"
          descricao="Natal, Rio Grande do Norte, Brasil"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQF4vkmIYaMFvg/company-logo_100_100/0/1519901484271?e=1661385600&v=beta&t=qQ4FEqU1NOh3MxPboCyGM2Tq4AiPMB3ATkB3zdY01uc"
          nome="NatalMakers"
          cargo="Desenvolvedor de hardware"
          data="ago de 2018 - ago de 2019 · 1 ano 1 mês"
          descricao="Natal, Rio Grande do Norte, Brasil"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQF4vkmIYaMFvg/company-logo_100_100/0/1519901484271?e=1661385600&v=beta&t=qQ4FEqU1NOh3MxPboCyGM2Tq4AiPMB3ATkB3zdY01uc"
          nome="Natalmakers"
          cargo="Estagiário"
          data="jul de 2017 - jul de 2018 · 1 ano 1 mês"
          descricao="Natal, Rio Grande do Norte, Brasil"
        />

        <CardGrande
          imagem="https://www.qualital.com.br/wp-content/uploads/2021/10/Marca_Qualital_web_2-1200x1200.jpg"
          nome="Qualital Engenharia Ambiental"
          cargo="Estagiário"
          data="jun de 2016 - dez de 2016 · 7 meses"
          descricao="Natal, Rio Grande do Norte, Brasil"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_100_100/0/1568064674419?e=1661385600&v=beta&t=CLV9waBjGyGJpzC9CvtNip_v5WcF4rYJAIP6vMU8bXY"
          nome="Universidade Federal do Rio Grande do Norte"
          cargo="Bolsista, Iniciação Científica"
          data="ago de 2013 - jul de 2014 · 1 ano"
          descricao="Natal, Rio Grande do Norte, Brasil"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação acadêmica</h2>

        <CardGrande
          imagem="https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB"
          nome="Labenu"
          cargo="Tecnologia da Informação"
          data="mai de 2022 - Em andamento"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFYLhoamQSfzw/company-logo_100_100/0/1634226395187?e=1661385600&v=beta&t=tTUjnv8F_oNyCSCJbimyTzDJvnRY-ZH_WuBNt6LYk_k"
          nome="Universidade Federal do Rio Grande do Norte"
          cargo="Ensino Técnico, Tecnologia da Informação"
          data="abr de 2022 - Em andamento"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_100_100/0/1568064674419?e=1661385600&v=beta&t=CLV9waBjGyGJpzC9CvtNip_v5WcF4rYJAIP6vMU8bXY"
          nome="Universidade Federal do Rio Grande do Norte"
          cargo="Mestrado, Engenharia Elétrica e de Computação"
          data="fev de 2019 - jul de 2021"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_100_100/0/1568064674419?e=1661385600&v=beta&t=CLV9waBjGyGJpzC9CvtNip_v5WcF4rYJAIP6vMU8bXY"
          nome="Universidade Federal do Rio Grande do Norte"
          cargo="Bacharelado em Engenharia, Tecnologia em Engenharia Mecânica"
          data="jan de 2017 - dez de 2018"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_100_100/0/1568064674419?e=1661385600&v=beta&t=CLV9waBjGyGJpzC9CvtNip_v5WcF4rYJAIP6vMU8bXY"
          nome="Universidade Federal do Rio Grande do Norte"
          cargo="Bacharelado em Ciências e Tecnologia, Engenharia Mecânica"
          data="fev de 2013 - dez de 2016"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>

      <div className="page-section-container">
        <h2>Competências & Linguagens</h2>
        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          linguagem="HTML"
          competencias="2 recomendações de competências"
        />

        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          linguagem="JavaScript"
          competencias="2 recomendações de competências"
        />

        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          linguagem="CSS"
          competencias="2 recomendações de competências"
        />

        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          linguagem="C++"
          competencias="1 recomendação de competência"
        />

        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"
          linguagem="LaTeX"
          competencias="1 recomendação de competência"
        />

        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
          linguagem="Arduino"
          competencias="2 recomendações de competências"
        />

        <h3>Em aprendizado</h3>

        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          linguagem="React"
        />

        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
          linguagem="Kotlin"
        />

        <CardCompetencias
          imagem="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          linguagem="Java"
        />
      </div>
    </div>
  );
}

export default App;
