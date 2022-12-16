const NODE_ENV = process.env.NODE_ENV

const getEnv = () => {
  const map = {
    production: 'pro',
    development: 'local',
  }
  return map[NODE_ENV] || 'local'
}

// 地址结尾必须带/
const envs = {
  real: {
    BASE: '//1.116.178.22/',
    GEOHUB: '//geohub.real4d.xyz/',
  },
  pre: {
    BASE: '//1.116.178.22/',
    GEOHUB: '//geohub.real4d.xyz/',
  },
  dev: {
    BASE: '//1.116.178.22/',
    GEOHUB: '//geohub.real4d.xyz/',
  },
}

const hosts = envs[getEnv()]

const getHost = (serviceName = 'BASE') => {
  return hosts ? hosts[serviceName] : '/'
}

export { getEnv, getHost }
