# 디지털사이니지 CMS 메뉴얼 

### 실행 시키는 법 

```bash
npm run docs:dev
```

### GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

#### 배포 방법

1. **자동 배포 (권장)**
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - GitHub Actions가 빌드하고 배포를 처리합니다

2. **수동 배포**
   ```bash
   npm run docs:deploy
   ```

#### 배포 URL

배포가 완료되면 다음 URL에서 접근할 수 있습니다:
- https://ashleylee00.github.io/SignaLink-manual/

#### GitHub Pages 설정

1. GitHub 저장소에서 **Settings** → **Pages**로 이동
2. **Source**를 **GitHub Actions**로 설정
3. 배포가 완료되면 자동으로 URL이 생성됩니다
