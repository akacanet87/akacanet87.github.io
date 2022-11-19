import {
  useEffect,
  useRef,
  useState,
} from 'react'

import { OneDegreeGarbageProps } from '@services/upcycle/types'

interface MapProps {
  latitude: number
  longitude: number
}

const markerList = [
  {
    title: '나는 누구1',
    description: '여긴 어디1',
    latitude: 37.500201,
    longitude: 127.03311,
    address: '서울시 어딘가1',
  },
  {
    title: '나는 누구2',
    description: '여긴 어디2',
    latitude: 37.51307,
    longitude: 127.04738,
    address: '서울시 어딘가2',
  },
  {
    title: '나는 누구3',
    description: '여긴 어디3',
    latitude: 37.51833,
    longitude: 127.02837,
    address: '서울시 어딘가3',
  },
  {
    title: '나는 누구4',
    description: '여긴 어디4',
    latitude: 37.52107,
    longitude: 127.02432,
    address: '서울시 어딘가4',
  },
  {
    title: '나는 누구5',
    description: '여긴 어디5',
    latitude: 37.52696,
    longitude: 127.01987,
    address: '서울시 어딘가5',
  },
  {
    title: '나는 누구6',
    description: '여긴 어디6',
    latitude: 37.52692,
    longitude: 127.01899,
    address: '서울시 어딘가6',
  },
  {
    title: '나는 누구7',
    description: '여긴 어디7',
    latitude: 37.52672,
    longitude: 127.01898,
    address: '서울시 어딘가7',
  },
  {
    title: '나는 누구8',
    description: '여긴 어디8',
    latitude: 37.52668,
    longitude: 127.01890,
    address: '서울시 어딘가8',
  },
  {
    title: '나는 누구9',
    description: '여긴 어디9',
    latitude: 37.52671,
    longitude: 127.01889,
    address: '서울시 어딘가9',
  },
]

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null)
  const [currentLocation, setCurrentLocation] = useState<MapProps | string>('')
  const [markers, setMarkers] = useState<OneDegreeGarbageProps[]>([] as OneDegreeGarbageProps[])
  const [loading, setLoading] = useState(true)

  const onClickMarker = (mapMarker: OneDegreeGarbageProps) => {
    alert(JSON.stringify(mapMarker))
  }

  const setMarkersOnMap = (mapMarkers: OneDegreeGarbageProps[]) => {
    mapMarkers?.forEach((marker) => {
      // eslint-disable-next-line no-new
      const mapMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(marker.latitude, marker.longitude),
        map: mapRef.current,
        icon: {
          content: '<img src="/assets/images/icons/icon-marker.png" alt="" ' +
            'style="margin: 0; padding: 0; border: 0 solid transparent; display: block; max-width: none; max-height: none; ' +
            '-webkit-user-select: none; position: absolute; width: 32px; height: 32px; left: 0; top: 0;">',
          size: new naver.maps.Size(32, 32),
          anchor: new naver.maps.Point(16, 32),
        },
      })
      naver.maps.Event.addListener(mapMarker, 'click', () => onClickMarker(marker))
    })
  }

  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
    navigator?.permissions?.query({ name: 'geolocation' })
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
    } else {
      alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.')
      setCurrentLocation({ latitude: 37.4862618, longitude: 127.1222903 })
    }
  }, [])

  useEffect(() => {
    if (typeof currentLocation !== 'string') {
      // 현재 위치 추적
      const currentPosition = [currentLocation.latitude, currentLocation.longitude]

      // Naver Map 생성
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      })
      setMarkers(markerList)
      setLoading(false)
    }
  }, [currentLocation])

  useEffect(() => {
    setMarkersOnMap(markers)
  }, [markers])

  return {
    currentLocation,
    setMarkers,
    loading,
  }
}

export default useMap
