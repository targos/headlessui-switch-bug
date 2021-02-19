# headlessui-switch-bug

To reproduce:

```console
npm install
npx tsc
```

Output:

```console
$ npx tsc  
node_modules/@headlessui/react/dist/components/switch/switch.d.ts:16:32 - error TS1335: 'unique symbol' types are not allowed here.

16     }>>(props: Props<TTag, {}, unique symbol>) => JSX.Element;
                                  ~~~~~~~~~~~~~


Found 1 error.
```
