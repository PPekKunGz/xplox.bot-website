import effect from "../../styles/components/particle_effect.module.css";

function Particle() {
  return (
    <div>
      <div className={effect.white}>
        <div className={effect.squares}>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
          <div className={effect.square}></div>
        </div>
      </div>
      <div className={effect.grey}></div>
    </div>
  );
}

export default Particle;
