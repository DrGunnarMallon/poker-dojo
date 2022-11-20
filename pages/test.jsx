import { useTrainerStore } from '../stores/useTrainerStore';

export default function Home() {
  const toggleAction = useTrainerStore((state) => state.toggleAction);
  const togglePositionHero = useTrainerStore((state) => state.togglePositionHero);
  const togglePositionVillain = useTrainerStore((state) => state.togglePositionVillain);
  const actions = useTrainerStore((state) => state.actions);
  const positionHero = useTrainerStore((state) => state.positionHero);
  const positionVillain = useTrainerStore((state) => state.positionVillain);

  return (
    <div>
      {Object.keys(actions).map((action) => (
        <div
          key={action}
          onClick={() => toggleAction(action)}
          style={{
            width: '200px',
            textAlign: 'center',
            marginBlock: '10px',
            paddingBlock: '5px',
            backgroundColor: actions[action] ? '#ff0000' : '#0000ff',
          }}
        >
          {action} = {actions[action] ? 'on' : 'off'}
        </div>
      ))}
      <hr style={{ marginBlock: '20px' }} />
      {Object.keys(positionHero).map((position) => (
        <div
          key={position}
          onClick={() => togglePositionHero(position)}
          style={{
            width: '200px',
            textAlign: 'center',
            marginBlock: '10px',
            paddingBlock: '5px',
            backgroundColor: positionHero[position] ? '#ff0000' : '#0000ff',
          }}
        >
          {position} = {positionHero[position] ? 'on' : 'off'}
        </div>
      ))}
      <hr style={{ marginBlock: '20px' }} />
      {Object.keys(positionVillain).map((position) => (
        <div
          key={position}
          onClick={() => togglePositionVillain(position)}
          style={{
            width: '200px',
            textAlign: 'center',
            marginBlock: '10px',
            paddingBlock: '5px',
            backgroundColor: positionVillain[position] ? '#ff0000' : '#0000ff',
          }}
        >
          {position} = {positionVillain[position] ? 'on' : 'off'}
        </div>
      ))}
    </div>
  );
}
