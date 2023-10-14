export enum ErrorCode {
  DUPLICATION_EMAIL = '이메일이 중복되었습니다.',
  DUPLICATION_NICKNAME = '닉네임이 중복되었습니다.',
  DUPLICATION_COMPANY_NAME = '회사 이름이 중복되었습니다.',
  NOT_FOUND_EMAIL = '이메일을 찾을 수 없습니다.',
  NOT_FOUND_COMPANY = '등록된 회사가 없으므로 채용공고를 등록할 수 없습니다.',
  NOT_FOUND_JOBVACANCY = '채용공고를 찾을 수 없습니다.',
  MISMATCH_PASSWORD = '비밀번호가 일치하지 않습니다.',
  REGISTERED_DUPLICATION_USER_ID = '회사는 1개만 등록가능합니다. 이미 중복된 유저 아이디로 등록되어 있습니다.',
  JOB_VACANCY_ALREADY_APPLIED = '이미 지원한 채용공고 입니다.',
}
