import { IIconProps, IconButton } from 'native-base'

export function AppIconButton({ icon, onPress, _icon }: {
  icon: JSX.Element,
  onPress?: () => void,
  _icon?: IIconProps
}) {
  return (
    <IconButton
      color={'primary.100'}
      {...{ icon, onPress }}
      p={3}
      rounded={'full'}
      _icon={{ color: "primary.100", ..._icon }}
      _pressed={{ _icon: { color: 'primary.600' }, }}
    />
  )
}
