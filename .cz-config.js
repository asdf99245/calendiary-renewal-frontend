module.exports = {
  types: [
    { value: '✨ feat', name: '✨ feat:\t새로운 기능 추가 및 수정' },
    { value: '🐛 fix', name: '🐛 fix:\t버그 수정' },
    { value: '🎨 design', name: '🎨 design:\t레이아웃, 스타일 추가 및 수정' },
    {
      value: '♻️ refactor',
      name: '♻️ refactor:\t코드 리팩토링',
    },
    { value: '📝 docs', name: '📝 docs:\t문서 추가 및 수정' },
    { value: '🚚 rename', name: '🚚 rename:\t파일 이동 및 이름 변경' },
    { value: '🔥 remove', name: '🔥 remove:\t파일 삭제' },
    {
      value: '💄 style',
      name: '💄 style:\t코드 포맷팅 관련',
    },
    {
      value: '✅ test',
      name: '✅ test:\t테스트 코드 작성 및 수정',
    },
    {
      value: '🧹 chore',
      name: '🧹 chore:\t기타 변경 사항 (다른 작업 이외의 것들)',
    },
    {
      value: '📦 build',
      name: '📦 build:\t빌드 관련, ci/cd 설정',
    },
  ],
  allowCustomScopes: false,
  skipQuestions: ['scope'],
  allowBreakingChanges: ['feat', 'fix'],
  messages: {
    type: '커밋의 유형을 선택하세요:',
    scope: '\n이 변경의 범위(scope)를 작성해주세요 (optional):',
    subject: '변경에 대해 명령형으로 간결하게 설명을 작성해주세요:\n',
    body: '자세한 설명을 작성하세요. "|"를 통해 줄바꿈할 수 있습니다.(optional):\n',
    breaking: 'BREAKING CHANGES를 나열하세요 (optional):\n',
    footer: '해결된 이슈 번호를 나열하세요  ex): #1, #2 (optional):\n',
    confirmCommit: '커밋을 진행하시겠습니까?',
  },
};
