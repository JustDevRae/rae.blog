# pages 폴더 안내

Next.js App Router와 FSD를 하기 위해서는 src 폴더 내에 `app`, `pages`, `widgets`, `features`, `entities`, `shared` layer를 구성하고, Next.js App Router의 라우팅 폴더인 `app`을 프로젝트 최상단에 위치시켜야 합니다.

하지만 Next.js는 `src/pages`를 Pages Router로 인식하려고 시도하여 빌드가 중단될 수 있습니다.

이 `pages` 폴더는 Next.js가 `src/pages`를 라우팅 폴더로 오인하는 것을 방지합니다.

> [!WARNING]
>
> 빌드 에러 방지를 위한 필수 폴더이므로, 삭제하거나 폴더 내에 파일이나 하위 폴더를 생성하지 않도록 주의해주시기 바랍니다.
