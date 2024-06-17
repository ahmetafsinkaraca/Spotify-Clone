import { Icon } from "../Icons";
import { secondsToTime } from "../utils";
import { useSelector } from "react-redux";
import CustomRange from "./CustomRange";


export default function FullScreenPlayer({ toggle, state, controls, volumeIcon }) {

    const { current } = useSelector(state => state.player)



    return (
        <div className="h-full relative">
            <div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: `url(${current.image})`}}/>

            <div className="absolute left-8 top-8 opacity-70 items-center text-white flex gap-x-4">
                <Icon name='logo' size={34}/>
                <div className="text-xs">
                    <h3 style={{fontSize: 11}}>PLAYING FROM PLAYLIST</h3>
                    <p className="font-semibold mt-0.5">{current.title}</p>
                </div>
            </div>

            <div className="absolute flex items-center gap-x-5 bottom-36 left-40">
                    <img src={current.image} alt="" className="w-20 h-20 "/>
                <div className="self-end">
                   <h3 className="font-bold text-md">{current.title}</h3>
                   <p className="font-semibold text-sm">{current.description}</p> 
                </div>
            </div>

            <div onClick={e => {
                e.stopPropagation()
            }}  className="absolute bottom-4 w-full  flex flex-col px-8 items-center"> 
                <div className="w-fulled flex items-center mt-1.5 gap-x-2">
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
                <div className="flex items-center gap-x-5">
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="shuffle" />
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="playerPrev" />
                    </button>
                    <button
                        onClick={controls[state?.playing ? 'pause' : 'play']}
                        className="w-16 h-16 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
                        <Icon size={24} name={state?.playing ? 'pause' : 'play'} />
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="playerNext" />
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="repeat" />
                    </button>
                </div>
                <div className="flex items-center absolute gap-x-3 bottom-3 right-6">
                    <button
                        onClick={controls[state.muted ? 'unmuted' : 'muted']}
                        className='w-8 h-8 ite justify-center flex text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name={volumeIcon} size={16} />
                    </button>
                    <div className='w-[5rem] max-w-full'>
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
                        <Icon name='fullScreenOff' size={16} />
                    </button>
                </div>
            </div>
        </div>
  )
}
