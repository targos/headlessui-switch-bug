import { Switch } from '@headlessui/react';

export function Test () {
  return <Switch checked onChange={console.log}></Switch>
}