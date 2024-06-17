import { Icon } from 'Icons';
import { useAudio, useFullscreen, useToggle } from 'react-use';
import { secondsToTime } from 'utils';
import CustomRange from 'components/CustomRange';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setControls, setPlaying, setSidebar } from 'stores/player';
import FullScreenPlayer from 'components/FullScreenPlayer';

export default function Player() {

  const fsRef = useRef()
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, { onClose: () => toggle(false) });

  const dispatch = useDispatch()
  const { current, sidebar } = useSelector(state => state.player)

  const [audio, state, controls, ref] = useAudio({
    src: current?.src
  });

  useEffect(() => {
    controls.play()
  }, [current])

  useEffect(() => {
    dispatch(setPlaying(state.playing))
  }, [state.playing])

  useEffect(() => {
    dispatch(setControls(controls))
  }, [])

  const volumeIcon = useMemo(() => {
    if (state.volume == 0 || state.muted)
      return 'volumeMuted'

    if (state.volume > 0 && state.volume < 0.33)
      return 'volumeLow'

    if (state.volume >= 0.33 && state.volume < 0.66)
      return 'volumeNormal'

    return 'volumeFull'

  }, [state.muted, state.volume])

  return (
    <div className='flex justify-between items-center px-4 h-full'>
      <div className="min-w-[11.25rem] w-[30%]">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className=' flex-shrink-0 mr-3 group relative w-14 h-14'>
                  <img src={current.image} alt='' />
                  <button
                    onClick={() => dispatch(setSidebar(true))}
                    className='w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-105 flex items-center justify-center rounded-full absolute top-1 right-1 rotate-90'>
                    <Icon name='arrowLeft' size={16} />
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm ">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">{current.artist}</p>
              </div>
            </div>
            <button
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="heart" />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="pictureInPicture" />
            </button>
          </div>
        )}
      </div>

      <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
        <div className='flex items-center gap-x-2 '>
          <button className='w-8 h-8 items-center justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name='shuffle' size={16} />
          </button>
          <button className='w-8 h-8 items-center justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name='playerPrev' size={16} />
          </button>
          <button
            onClick={controls[state?.playing ? 'pause' : 'play']}
            className='w-8 h-8 bg-white items-center justify-center flex text-black rounded-full hover:scale-[1.05]'>
            <Icon name={state?.playing ? 'pause' : 'play'} size={16} />
          </button>
          <button className='w-8 h-8 items-center justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name='playerNext' size={16} />
          </button>
          <button className='w-8 h-8 items-center justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name='repeat' size={16} />
          </button>
        </div>
        <div className='w-full flex items-center gap-x-2 '>
          {audio}
          <div className='text-[0.688rem] text-white text-opacity-70'>
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={value => controls.seek(value)}
          />
          <div className='text-[0.688rem] text-white text-opacity-70'>
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-end min-w-[11.25rem] w-[30%]'>
        <button className='w-8 h-8 ite justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='lyrics' size={16} />
        </button>
        <button className='w-8 h-8 ite justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='queue' size={16} />
        </button>
        <button className='w-8 h-8 ite justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='shuffle' size={16} />
        </button>
        <button className='w-8 h-8 ite justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='device' size={16} />
        </button>
        <button
          onClick={controls[state.muted ? 'unmuted' : 'muted']}
          className='w-8 h-8 ite justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name={volumeIcon} size={16} />
        </button>
        <div className='w-[5rem] mb-4'>
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={value =>{
              controls.unmute() 
              controls.volume(value)
            }}
          />
        </div>
        <button
          onClick={toggle}
          className='w-8 h-8 ite justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='fullScreen' size={16} />
        </button>
      </div>
      <div ref={fsRef}>
        {isFullscreen && (
          <FullScreenPlayer
            toggle={toggle}
            state={state}
            controls={controls}
            volumeIcon={volumeIcon} />
        )}
      </div>
    </div>

  )
}
