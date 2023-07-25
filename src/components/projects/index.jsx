import Codeby from "../../assets/Codeby.webp";
import HDF from "../../assets/HDF.webp";
import onlyNotes from "../../assets/onlyNotes.webp";
import overwatch from "../../assets/overClone.webp";
import "./styles.scss";

function Project() {
  const projects = [
    {
      title: "HDF",
      link: "https://hdf-gamma.vercel.app/",
      text: "Um site que exibe algumas das minhas músicas favoritas e mostra trechos das letras.",
      img: HDF,
    },
    {
      title: "Codeby",
      link: "https://codeby-zeta.vercel.app/",
      text: "Site de um projeto de processo seletivo reformulado com base nas minhas habilidades atuais.",
      img: Codeby,
    },
    {
      title: "Only Notes",
      link: "https://only-notes-nine.vercel.app/",
      text: "Meu projeto mais recente: um site de notas minimalista com um design responsivo e atraente.",
      img: onlyNotes,
    },
    {
      title: "Overwatch Clone",
      link: "https://overwatch2-select.vercel.app/",
      text: "Projeto clone do overwatch: tela de seleção do overwatch",
      img: overwatch,
    },
  ];

  return (
    <div className="project-main">
      <h1>Projetos</h1>

      <div className="project-content">
        {projects.map((x, index) => {
          return (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={x.link}
              className="project-item"
            >
              <img alt={x.title} src={x.img} />
              <div className="project-text">
                <h1>{x.title}</h1>
                <label>{x.text}</label>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
