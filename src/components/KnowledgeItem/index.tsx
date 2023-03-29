import './KnowledgeItem.scss';

interface propsKnowledge {
  name: string
}

const KnowledgeItem = ({ name }: propsKnowledge) => {

  return (

    <div className='progressbar'>
      <svg className='progressbar__svg'>
        <circle cx="80" cy="80" r="70" className={`progressbar__svg_circle ${'circle_' + name} ${'shadow_' + name}`} />
      </svg>
      <span className={`progressbar__text ${'shadow_' + name}`}>{name}</span>
    </div >
  );
};

export default KnowledgeItem;